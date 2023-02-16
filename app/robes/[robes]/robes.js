'use client';
import '../../global.scss';
import '../../wands&staffs/[wandsAndStaffsName]/wandAndStaff.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function Robes(props) {
  const [count, setCount] = useState(1);
  const router = useRouter();

  return (
    <Fragment key={props.data.id}>
      <div className="container">
        <Image
          alt={props.data.title}
          src={props.data.imageLink}
          width="300"
          height="300"
        />
        <div>
          <div>
            <h1 className="title">{props.data.title.toLocaleUpperCase()}</h1>
            <div className="type">{props.data.type}</div>
          </div>
          <div className="price">{props.data.price} G</div>

          <div className="buttonContainer">
            <input
              type="submit"
              className="input"
              placeholder={count}
              value={count}
            />
            <button
              className="button"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>

            <button
              className="button"
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
              className="addToBag"
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
                router.refresh();
              }}
            >
              Add to Bag
            </button>
          </div>
        </div>
        <div className="description">{props.data.description}</div>
      </div>
    </Fragment>
  );
}
