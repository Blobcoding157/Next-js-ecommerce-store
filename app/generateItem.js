import './global.scss';
import './generateItem.scss';
import Image from 'next/image';
import { Fragment } from 'react';

const items = [
  {
    id: 1,
    title: 'Wand',
    type: 'Wand',
    description: 'a magical wand',
    imageLink: '/wand_logo.png',
  },
  {
    id: 2,
    title: 'Stick',
    type: 'Wand',
    description: 'A Stick from the ground.',
    imageLink: '/wand_logo.png',
  },
  {
    id: 3,
    title: 'Big Stick',
    type: 'Staff',
    description: 'A Giant Stick from the ground.',
    imageLink: '/wand_logo.png',
  },
];

export default function GenerateItem() {
  return (
    <>
      {items.map((item) => {
        return (
          <Fragment key={item.id}>
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
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
