import './global.scss';
import './navBanner.scss';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { getAllItems } from './database/items';

export default async function NavBanner() {
  const cartItemCookies = cookies().get(`cart`);
  let cartItemCookiesParsed = [];
  cartItemCookiesParsed = JSON.parse(cartItemCookies.value);

  const allItems = await getAllItems();

  const cartItems = cartItemCookiesParsed.map((cookie) => {
    const itemsInCart = allItems.find((item) => item.id === cookie.id);
    return {
      id: itemsInCart.id,
      title: itemsInCart.title,
      imageLink: itemsInCart.imageLink,
      price: itemsInCart.price,
      amount: cookie.amount,
    };
  });

  const totalAmount = cartItems.reduce(
    (acc, current) => acc + current.amount,
    0,
  );

  return (
    <div className="banner">
      <Link href="/">
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
