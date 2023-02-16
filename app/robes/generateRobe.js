import '../global.scss';
import '../wands&staffs/generateItem.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getAllItems } from '../database/items';

export default async function GenerateRobe() {
  const items = await getAllItems();

  const robes = items.filter((robe) => robe.type === 'Robe');

  const robesWithAmount = robes.map((robe) => {
    const itemWithAmount = { ...robe, amount: 0 };
    return itemWithAmount;
  });

  const robesToMap = robesWithAmount ? robesWithAmount : robes;

  return (
    <>
      {robesToMap.map((robe) => {
        return (
          <Fragment key={robe.id}>
            <Link
              className="itemLinkBegone"
              href={`/robes/${robe.title.toLocaleLowerCase()}`}
            >
              <div className="itemContainer">
                <Image
                  alt={robe.title}
                  src={robe.imageLink}
                  width="200"
                  height="250"
                />
                <h1 className="itemTitle">{robe.title.toUpperCase()}</h1>
                <div className="itemType">{robe.type}</div>

                <div className="itemPrice">{robe.price} G</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </>
  );
}
