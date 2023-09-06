import './styles/hero-page.scss';
import './global.scss';
import FeaturedCarousel from './components/featuredCarousel';

export default function Home() {
  return (
    <div className="background">
      <img
        className="mainLogo"
        alt="Welcome to WizardShack"
        src="/wizard-mp-t.png"
      />
      <FeaturedCarousel />
    </div>
  );
}
