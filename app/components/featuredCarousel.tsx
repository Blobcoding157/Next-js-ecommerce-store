import '../styles/featuredCarousel.scss';
import '../global.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
import { getAllItems } from '../database/items';

export default async function FeaturedCarousel() {
  const allItems = await getAllItems();

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };
  const Carousel = (props) => {
    const len = allItems.length;
    const [activeIndex, setActive] = useState(0);

    //Autoplay
    useInterval(() => {
      setActive((activeIndex + 1) % len);
    }, 3000);
  };
  // Link: https://codepen.io/lisianthus-a/pen/pobxrNq
  return (
    <section className="featured-section">
      <h1 className="featured-header">Featured Items</h1>
      <button className="previous-button">
        <img className="arrow" src="/arrow1.png" alt="previous product" />
      </button>
      <button className="next-button">
        <img className="arrow" src="/arrow1.png" alt="next product" />
      </button>
      <div className="featured-card-container">
        {allItems.map((item) => {
          let linkFix = '';
          switch (item.type) {
            case 'Wand':
              linkFix = 'wands&staffs';
              break;
            case 'Staff':
              linkFix = 'wands&staffs';
              break;
            case 'Robe':
              linkFix = 'robes';
              break;
            case 'Broom':
              linkFix = 'brooms';
              break;
            default:
              linkFix = 'Error';
          }
          return (
            <Fragment key={item.id}>
              <Link
                className="item-card"
                href={`/${linkFix}/${item.title.toLocaleLowerCase()}`}
              >
                <div>
                  <Image
                    className="item-image"
                    alt={item.title}
                    src={item.imageLink}
                    width="400"
                    height="450"
                  />
                  <h1 className="item-title">{item.title.toUpperCase()}</h1>
                </div>
              </Link>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
