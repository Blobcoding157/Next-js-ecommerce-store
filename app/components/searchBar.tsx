'use client';
import '../styles/navBanner.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

type SearchItem = {
  id: number;
  title: string;
  type: string;
  imageLink: string;
};

type Props = { items: SearchItem[] };

export default function SearchBar({ items }: Props) {
  const [search, setSearch] = useState('');
  const [list, setList] = useState<SearchItem[]>([]);

  useEffect(() => {
    setList(items);
  }, [items]);

  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="searchContainer">
      <input
        className="searchBar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      {search !== '' && (
        <main className="SearchListContainer">
          {search[1] &&
            filteredList.map((item) => (
              <Fragment key={item.id}>
                <Link
                  onClick={() => setSearch('')}
                  className="searchListItem"
                  href={`./${
                    item.type === 'Wand'
                      ? 'wands&staffs'
                      : item.type === 'Staff'
                      ? 'wands&staffs'
                      : item.type === 'Broom'
                      ? 'brooms'
                      : item.type === 'Robe'
                      ? 'robes'
                      : 'itemNotFound'
                  }/${item.title.toLocaleLowerCase()}`}
                >
                  <Image
                    className="searchItemImage"
                    alt={item.title}
                    src={item.imageLink}
                    width="100"
                    height="100"
                  />
                  <div className="searchItemTitle">
                    {item.title.replace(/_/g, ' ')}
                  </div>
                </Link>
              </Fragment>
            ))}
        </main>
      )}
    </div>
  );
}
