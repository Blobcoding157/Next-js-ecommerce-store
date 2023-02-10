import '../global.scss';
import './generateItem.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { items } from '../database/items.mjs';

export default function GenerateItem() {
  // To-Do: find a way to initialize individual Wand&Staffs Cookies

  const wandsAndStaffCookies = cookies().get(`cart`);

  let wandsAndStaffCookiesParsed = [];

  wandsAndStaffCookiesParsed = JSON.parse(wandsAndStaffCookies.value);

  const wandAndStaffWithAmount = items.map((item) => {
    const itemWithAmount = { ...item, amount: 0 };
    return itemWithAmount;
  });

  const ItemsToMap = wandAndStaffWithAmount ? wandAndStaffWithAmount : items;

  return (
    <>
      {ItemsToMap.map((item) => {
        return (
          <Fragment key={item.id}>
            <Link
              className="itemLinkbegone"
              href={`/wands&staffs/${item.title.toLocaleLowerCase()}`}
            >
              <div className="itemContainer">
                <Image
                  alt={item.title}
                  src={item.imageLink}
                  width="200"
                  height="200"
                />
                <h1 className="itemTitle">{item.title.toUpperCase()}</h1>
                <div className="itemType">{item.type}</div>

                <div className="itemPrice">{item.price}</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </>
  );
}
