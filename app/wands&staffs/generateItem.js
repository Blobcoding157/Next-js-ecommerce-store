import '../global.scss';
import './generateItem.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { items } from '../database/items';

export default function GenerateItem() {
  return (
    <>
      {items.map((item) => {
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
