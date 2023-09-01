import '../global.scss';
import '../styles/generateItem.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getAllItems } from '../database/items';

export default async function GenerateRobe() {
  const items = await getAllItems();

  const brooms = items.filter((broom) => broom.type === 'Broom');

  const broomsWithAmount = brooms.map((broom) => {
    const itemWithAmount = { ...broom, amount: 0 };
    return itemWithAmount;
  });

  const robesToMap = broomsWithAmount ? broomsWithAmount : brooms;

  return (
    <>
      {robesToMap.map((broom) => {
        return (
          <Fragment key={broom.id}>
            <Link
              className="itemLinkBegone"
              href={`/brooms/${broom.title.toLocaleLowerCase()}`}
            >
              <div className="itemContainer">
                <Image
                  alt={broom.title}
                  src={broom.imageLink}
                  width="200"
                  height="250"
                />
                <h1 className="itemTitle">{broom.title.toUpperCase()}</h1>
                <div className="itemType">{broom.type}</div>

                <div className="itemPrice">{broom.price} G</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </>
  );
}
