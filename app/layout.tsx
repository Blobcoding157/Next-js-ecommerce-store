import './global.scss';
import CookieBanner from './CookieBanner';
import NavBanner from './navBanner';

type Props = {
  children: React.ReactNode;
};
export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="header">
          <NavBanner />
        </header>
        <CookieBanner />
        <div className="entirePageContainer">{props.children}</div>
      </body>
      {/* <div className="footer"> this is the Bottom info Area</div> */}
    </html>
  );
}
