'use client';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function CookieBanner() {
  // Check for localStorage Field

  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('areCookiesAccepted');

    const initialState =
      localStorageValue === undefined ? false : localStorageValue;
    setIsCookieBannerVisible(initialState);
  }, []);

  return (
    !isCookieBannerVisible && (
      <div>
        Accept our Cookies or Expect angry witches and wizards at your house
        <button
          onClick={() => {
            setIsCookieBannerVisible(true);
            setLocalStorage('areCookiesAccepted', true);
          }}
        >
          Accept
        </button>
      </div>
    )
  );
}
