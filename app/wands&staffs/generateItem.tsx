import '../global.scss';
import './generateItem.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getAllItems } from '../database/items';

export default async function GenerateItem() {
  const items = await getAllItems();

  const wandAndStaffs = items.filter(
    (ws) => ws.type === 'Wand' || ws.type === 'Staff',
  );

  const wandAndStaffWithAmount = wandAndStaffs.map((item) => {
    const itemWithAmount = { ...item, amount: 0 };
    return itemWithAmount;
  });

  return (
    <>
      {wandAndStaffWithAmount.map((item) => {
        return (
          <Fragment key={item.id}>
            <Link
              className="itemLinkBegone"
              href={`/wands&staffs/${item.title.toLocaleLowerCase()}`}
            >
              <div className="itemContainer">
                <Image
                  alt={item.title}
                  src={item.imageLink}
                  width="200"
                  height="250"
                />
                <h1 className="itemTitle">{item.title.toUpperCase()}</h1>
                <div className="itemType">{item.type}</div>

                <div className="itemPrice">{item.price} G</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </>
  );
}
