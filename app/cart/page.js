import '../global.scss';
import '../styles/cartPage.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getAllItems } from '../database/items';

export default async function CartPage() {
  const cartItemCookies = cookies().get(`cart`);

  let cartItemCookiesParsed = [];

  if (cartItemCookies) {
    cartItemCookiesParsed = JSON.parse(cartItemCookies.value);
  }
  const allItems = await getAllItems();

  const cartItems = cartItemCookiesParsed.map((cookie) => {
    const itemsInCart = allItems.find((item) => item.id === cookie.id);
    return {
      id: itemsInCart.id,
      title: itemsInCart.title,
      imageLink: itemsInCart.imageLink,
      price: itemsInCart.price,
      amount: cookie.amount,
    };
  });

  const cost = cartItems.reduce(
    (acc, current) => acc + current.price * current.amount,
    0,
  );

  const tax = Math.floor(cost * 0.1);

  let shipping = '';
  let endTotal = 0;
  if (cost >= 500) {
    shipping = 'FREE';
    endTotal = tax + cost;
  } else {
    shipping = `${Math.floor(cost * 0.05)} G`;
    endTotal = tax + cost + Math.floor(cost * 0.05);
  }

  return (
    <div className="cart-page">
      <h1 className="cart-page-title">Your Magical Bag</h1>
      <div className="cart-checkout-container">
        <main className="cart-item-container">
          {!cartItemCookies ? (
            <div />
          ) : (
            cartItems.map((item) => {
              return (
                <div className="cart-item" key={item.id}>
                  <Image
                    className="cart-item-image"
                    alt={item.title}
                    src={item.imageLink}
                    width="150"
                    height="150"
                  />
                  <div className="cart-item-title-information-container">
                    <h2 className="cart-item-title">{item.title}</h2>
                    <div className="cart-item-information">
                      <div className="cart-item-price">
                        {item.price * item.amount} G
                      </div>
                      <div className="cart-item-quantity-container">
                        <button className="cart-item-button">-</button>
                        {' ' + item.amount + ' '}
                        <button className="cart-item-button">+</button>
                      </div>
                      <button
                        aria-label="remove"
                        className="cart-item-remove-button"
                      >
                        <Image
                          src="/remove.png"
                          alt=""
                          width="25"
                          height="25"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </main>
        <div className="info-card-container">
          <div className="info-card">
            <h2 className="info-card-header">Summary</h2>
            <div className="info-card-list">
              <div className="info-card-list-item">
                Subtotal<div className="info-card-list-amount">{cost} G</div>
              </div>
              <div className="info-card-list-item">
                Shipping
                <div className="info-card-list-amount">{shipping}</div>
              </div>
              <div className="info-card-list-item">
                Taxation<div className="info-card-list-amount">{tax} G</div>
              </div>
              <div className="info-card-list-item-total">
                Total<div className="info-card-list-amount">{endTotal} G</div>
              </div>
            </div>
            <div className="checkout-button-container">
              <Link href="/checkout">
                <button className="checkout-button">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
