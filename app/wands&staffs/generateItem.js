import '../global.scss';
import './generateItem.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { items } from '../database/items';

export default function GenerateItem() {
  // To-Do: find a way to initialize individual Wand&Staffs Cookies

  // const wandsAndStaffCookies = cookies().get(
  //   `${props.data.id}${props.data.title}`,
  // );
  const wandsAndStaffCookies = cookies().get(`1Wand`);

  let wandsAndStaffCookiesParsed = [];

  wandsAndStaffCookiesParsed = JSON.parse(wandsAndStaffCookies.value);

  console.log(wandsAndStaffCookiesParsed);

  const wandAndStaffWithAmount = items.map((item) => {
    const itemWithAmount = { ...item, amount: 0 };
    return itemWithAmount;
  });

  return (
    <>
      {wandAndStaffWithAmount.map((item) => {
        return (
          <Fragment key={item.id}>
            <Link
              className="itemLinkbegone"
              href={`/wands&staffs/${item.title.toLowerCase()}`}
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

                <p className="itemDescription">{item.description}</p>
                <div className="itemPrice">{item.price}</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </>
  );
}
