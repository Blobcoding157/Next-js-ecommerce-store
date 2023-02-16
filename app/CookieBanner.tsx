'use client';
import './global.scss';
import { useEffect, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';

export default function CookieBanner() {
  // Check for localStorage Field

  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  useEffect(() => {
    const localStorageValue = getParsedCookie('areCookiesAccepted');

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
            setStringifiedCookie('areCookiesAccepted', true);
          }}
        >
          Accept
        </button>
      </div>
    )
  );
}
