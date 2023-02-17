'use client';
import './global.scss';
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

  return isCookieBannerVisible ? (
    <div />
  ) : (
    <div className="entirePageContainer">
      <div>
        Accept our Cookies or expect angry witches and wizards at your house
        <button
          className="cookieBannerButton"
          onClick={() => {
            setIsCookieBannerVisible(true);
            setLocalStorage('areCookiesAccepted', true);
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
