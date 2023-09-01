import '../global.scss';
import '../styles/thankYouPage.scss';
import Image from 'next/image';

export default function ThankYouPage() {
  return (
    <div className="thank-you-page">
      <h1> thank you</h1>
      <Image src="/thank-you.gif" width="600" height="600" />
    </div>
  );
}
