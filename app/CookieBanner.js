'use client';
import { useState } from 'react';

export default function CookieBanner() {
  // Check for localStorage Field
  const localStorageValue = JSON.parse(
    window.localStorage.getItem('areCookiesAccepted'),
  );
  const initialState = localStorageValue === null ? false : localStorageValue;

  const [isCookieBannerVisible, setIsCookieBannerVisible] =
    useState(initialState);

  return (
    !isCookieBannerVisible && (
      <div>
        Accept our Cookies or Expect angry witches and wizards at your house
        <button
          onClick={() => {
            setIsCookieBannerVisible(true);
            window.localStorage.setItem(
              'areCookiesAccepted',
              JSON.stringify(true),
            );
          }}
        >
          Accept
        </button>
      </div>
    )
  );
}
