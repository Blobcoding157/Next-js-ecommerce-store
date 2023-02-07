import '../../global.scss';
import '../generateItem.scss';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import { items } from '../../database/items';

export default function WandsAndStaffsName(props) {
  const wandAndStaff = items.find((data) => {
    console.log(data);
    return data.title.toLowerCase() === props.params.wandsAndStaffsName;
  });
  if (!wandAndStaff) {
    notFound();
  }
  return (
    <Fragment key={wandAndStaff.id}>
      <Link
        className="itemLinkbegone"
        href={`/wands&staffs/${wandAndStaff.title.toLowerCase()}`}
      >
        <div className="itemContainer">
          <Image
            alt={wandAndStaff.title}
            src={wandAndStaff.imageLink}
            width="200"
            height="200"
          />
          <h1 className="itemTitle">{wandAndStaff.title.toUpperCase()}</h1>
          <div className="itemType">{wandAndStaff.type}</div>

          <p className="itemDescription">{wandAndStaff.description}</p>
          <div className="itemPrice">{wandAndStaff.price}</div>
        </div>
      </Link>
    </Fragment>
  );
}
