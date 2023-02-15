import '../global.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { Fragment } from 'react';
// import { getParsedCookie } from '../../utils/cookies';
import { getAllItems } from '../database/items';

export default async function ProductElement() {
  const cartItemCookies = cookies().get(`cart`);
  let cartItemCookiesParsed = [];
  cartItemCookiesParsed = JSON.parse(cartItemCookies.value);

  const allItems = await getAllItems();

  // const cookieItems = [];
  // allItems.map((cookie) => {
  //   if (cookie.id in cartItemCookiesParsed) {
  //     cookieItems.push({
  //       ...cookie,
  //       amount: cartItemCookiesParsed[cookie.id].amount,
  //     });
  //   }
  //   return cookieItems;
  // });

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

  return (
    <>
      {cartItems.map((item) => {
        return (
          <Fragment key={item.id}>
            <hr />
            <div>{item.id}</div>
            <h2>{item.title}</h2>
            <Image
              alt={item.title}
              src={item.imageLink}
              width="200"
              height="250"
            />
            <div>{item.price} G</div>
            <div>Quantity: {item.amount}</div>
            <hr />
          </Fragment>
        );
      })}
    </>
  );
}
