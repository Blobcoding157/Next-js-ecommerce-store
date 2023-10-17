'use client';

import '../styles/featuredCarousel.scss';
import '../global.scss';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useRef } from 'react';

export default function FeaturedCarousel(props: { items: any }) {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const SCROLL_AMOUNT = 900; // This value can be adjusted based on how much you want to scroll.

  const handleNextClick = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: SCROLL_AMOUNT,
        behavior: 'smooth',
      });
    }
  };

  const handlePreviousClick = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -SCROLL_AMOUNT,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="featured-section">
      <h1 className="featured-header">Featured Items</h1>
      <button className="previous-button" onClick={handlePreviousClick}>
        <img className="arrow" src="/arrow1.png" alt="previous product" />
      </button>
      <button className="next-button" onClick={handleNextClick}>
        <img className="arrow" src="/arrow1.png" alt="next product" />
      </button>
      <div className="featured-card-container" ref={cardContainerRef}>
        {props.items.map(
          (item: {
            id: number;
            type: string;
            title: string;
            imageLink: string;
          }) => {
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
          },
        )}
      </div>
    </section>
  );
}
