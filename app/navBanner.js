import './global.scss';
import './navBanner.scss';
import Link from 'next/link';

export default function NavBanner() {
  return (
    <div className="banner">
      <img className="headerLogo" alt="Wizard-Logo" src="/wizard-logo-t.png" />
      <nav className="bannerNavigation">
        <Link className="navigationItem" href="/">
          HOME
        </Link>
        /
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
          <img className="searchLogo" alt="search" src="/search.png" />
        </div>
        <div className="utilitiesItem">SIGN IN</div>
        <div className="utilitiesItem">
          <img className="cartLogo" alt="cart" src="/cart.png" />
        </div>
      </nav>
    </div>
  );
}
