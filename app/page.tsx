import './styles/hero-page.scss';
import './global.scss';
import FeaturedBanner from './components/featuredBanner';

export default function Home() {
  return (
    <div className="background">
      <img
        className="mainLogo"
        alt="Welcome to WizardShack"
        src="/wizard-mp-t.png"
      />
      <FeaturedBanner />
    </div>
  );
}
