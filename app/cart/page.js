import '../global.scss';
import './cartPage.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getAllItems } from '../database/items';

export default async function CartPage() {
  const cartItemCookies = cookies().get(`cart`);
  const allItems = await getAllItems();
  let cartItems = [];
  let cartItemCookiesParsed = [];
  let cost = 0,
    tax = 0,
    shipping = 0,
    endTotal = 0;

  if (cartItemCookies) {
    cartItemCookiesParsed = JSON.parse(cartItemCookies.value);

    cartItems = cartItemCookiesParsed.map((cookie) => {
      const itemsInCart = allItems.find((item) => item.id === cookie.id);
      return {
        id: itemsInCart.id,
        title: itemsInCart.title,
        imageLink: itemsInCart.imageLink,
        price: itemsInCart.price,
        amount: cookie.amount,
      };
    });

    cost = cartItems.reduce(
      (acc, current) => acc + current.price * current.amount,
      0,
    );

    tax = Math.floor(cost * 0.1);

    if (cost >= 500) {
      shipping = 'FREE';
      endTotal = tax + cost;
    } else {
      shipping = `${Math.floor(cost * 0.05)} G`;
      endTotal = tax + cost + Math.floor(cost * 0.05);
    }
  }

  return (
    <div className="cart-item-card-container">
      <div className="cart-item-container">
        <h1 className="cart-page-title">Your Magical Bag</h1>
        {!cartItemCookies &&
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
            <div className="info-card-list-item">SHIPPING: {shipping}</div>
            <div className="info-card-list-item">TAX: {tax} G</div>
            <div className="info-card-list-item">TOTAL COST: {endTotal} G</div>
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
