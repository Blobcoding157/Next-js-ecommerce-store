import '../global.scss';
import './cartPage.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getAllItems } from '../database/items';

export default async function CartPage() {
  const cartItemCookies = cookies().get(`cart`);
  let cartItemCookiesParsed = [];
  cartItemCookiesParsed = JSON.parse(cartItemCookies.value);

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
  const shipping = Math.floor(cost * 0.05);
  const tax = Math.floor(cost * 0.1);

  return (
    <div className="cart-item-card-container">
      <div className="cart-item-container">
        <h1 className="cart-page-title">Your Magical Bag</h1>
        {cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <Image
                className="cart-item-image"
                alt={item.title}
                src={item.imageLink}
                width="150"
                height="150"
              />
              <div className="cart-item-information">
                <h2 className="cart-item-title">{item.title}</h2>
                <div className="cart-item-price">
                  {item.price * item.amount} G
                </div>
                <div className="cart-item-quantity">
                  Quantity: {item.amount}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="info-card-container">
        <div className="info-card">
          <h2 className="info-card-header">TOTAL AMOUNT</h2>
          <div className="info-card-list">
            <div className="info-card-list-item">Cost: {cost} G</div>
            <div className="info-card-list-item">SHIPPING: {shipping} G</div>
            <div className="info-card-list-item">TAX: {tax} G</div>
            <div className="info-card-list-item">
              TOTAL COST: {cost + shipping + tax} G
            </div>
          </div>
          <div className="checkout-button-container">
            <Link href="/checkout">
              <button className="checkout-button">go to checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
