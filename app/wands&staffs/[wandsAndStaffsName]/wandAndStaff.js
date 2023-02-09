'use client';
import '../../global.scss';
import './wandAndStaff.scss';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export let totalAmount = 0;

export default function WandAndStaff(props) {
  const [count, setCount] = useState(1);

  return (
    <Fragment key={props.data.id}>
      <div>
        <Image
          alt={props.data.title}
          src={props.data.imageLink}
          width="200"
          height="200"
        />
        <h1>{props.data.title.toLocaleUpperCase()}</h1>
        <div>{props.data.type}</div>

        <p>{props.data.description}</p>
        <div>{props.data.price}</div>
        <input placeholder={count} value={count} />
        <button
          onClick={() => {
            if (count > 1) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            if (count >= 1) {
              setCount(count + 1);
            } else {
              setCount(1);
            }
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            // get the cookie
            const wandsAndStaffCookies = getParsedCookie(`cart`);
            // if there is no cookie we add an initial one with 1
            if (!wandsAndStaffCookies) {
              setStringifiedCookie(`cart`, [
                {
                  id: props.data.id,
                  amount: 1,
                },
              ]);

              // stop when there is no cookie
              return;
            }

            const foundCookie = wandsAndStaffCookies.find((cookie) => {
              return cookie.id === props.data.id;
            });

            if (foundCookie) {
              // my cookie is set
              foundCookie.amount += count;
              totalAmount += count;
            } else {
              // my cookie is not set
              wandsAndStaffCookies.push({
                id: props.data.id,
                amount: 1,
              });
            }
            // update the cookie
            setStringifiedCookie(`cart`, wandsAndStaffCookies);
            setCount(1);
          }}
        >
          Add to Bag
        </button>
      </div>
    </Fragment>
  );
}
