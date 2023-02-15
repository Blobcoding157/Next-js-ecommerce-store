import './page.scss';
import Image from 'next/image';

// import Image from 'next/image';

export default function Home() {
  return (
    <div className="background">
      {/* <Image
        className="mainPicture"
        alt="Picture of the factory"
        src="/main-bg.png"
        fill={true}
      /> */}
      <img
        className="mainLogo"
        alt="Welcome to WizardShack"
        src="/wizard-mp-t.png"
      />
    </div>
  );
}
