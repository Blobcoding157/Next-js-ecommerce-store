import '../global.scss';
import '../styles/navBanner.scss';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default function NavBanner() {
  const cartItemCookies = cookies().get(`cart`);

  let totalAmount = 0;
  let cartItemCookiesParsed: { id: number; amount: number }[] = [];

  if (cartItemCookies) {
    cartItemCookiesParsed = JSON.parse(cartItemCookies.value);

    totalAmount = cartItemCookiesParsed.reduce(
      (acc: number, current: { id: number; amount: number }) =>
        acc + current.amount,
      0,
    );
  }

  return (
    <div className="banner">
      <Link href="/" className="headerLogo-container">
        <img
          className="headerLogo"
          alt="Wizard-Logo"
          src="/wizard-logo-t.png"
        />
      </Link>
      <nav className="bannerNavigation">
        <Link className="navigationItem" href="/wands&staffs">
          <img className="navImages" alt="wands" src="/wand_logo.png" />
          WANDS&STAFFS
        </Link>
        /
        <Link className="navigationItem" href="/brooms">
          <img className="navImages" alt="brooms" src="/brooms_logo.png" />
          BROOMS
        </Link>
        /
        <Link className="navigationItem" href="/robes">
          <img className="navImages" alt="robes" src="/robes_logo.png" />
          ROBES
        </Link>
        /
        <Link className="navigationItem" href="/potions">
          <img className="navImages" alt="potion" src="/potion_logo.png" />
          POTIONS
        </Link>
      </nav>

      <nav className="bannerUtilities">
        <div className="utilitiesItem">
          <img className="utilsLogo" alt="search" src="/search.png" />
        </div>
        <div className="utilitiesItem">
          <img className="utilsLogo" alt="Login" src="/user_logo.png" />
        </div>
        <Link className="navigationItem" href="/cart">
          <img className="utilsLogo" alt="cart" src="/cart.png" />
          <div className="total-amount">{totalAmount}</div>
        </Link>
      </nav>
    </div>
  );
}
