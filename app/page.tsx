import './page.scss';
import './global.scss';
import Image from 'next/image';

// import Image from 'next/image';

export default function Home() {
  return (
    <div className="background">
      <img
        className="mainLogo"
        alt="Welcome to WizardShack"
        src="/wizard-mp-t.png"
      />
    </div>
  );
}
