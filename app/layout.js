import NavBanner from './navBanner';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="header">
          <NavBanner />
        </header>
        {children}
      </body>
      <div>this is the Bottom info Area</div>
    </html>
  );
}
