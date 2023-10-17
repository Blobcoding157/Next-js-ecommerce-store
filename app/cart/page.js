import { cookies } from 'next/headers';
import { getAllItems } from '../database/items';
import Cart from './Cart';

export default async function CartPage() {
  const cartItemCookies = cookies().get(`cart`);
  const allItems = await getAllItems();

  let cartItemCookiesParsed = [];

  if (cartItemCookies) {
    cartItemCookiesParsed = JSON.parse(cartItemCookies.value);
  }

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

  return <Cart items={cartItems} />;
}
