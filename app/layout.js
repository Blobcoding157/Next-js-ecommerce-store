import CookieBanner from './CookieBanner';
import NavBanner from './navBanner';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="header">
          <NavBanner />
        </header>
        <CookieBanner />
        {children}
      </body>
      {/* <div className="footer"> this is the Bottom info Area</div> */}
    </html>
  );
}
