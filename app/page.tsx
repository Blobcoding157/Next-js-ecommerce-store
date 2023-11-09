import './styles/hero-page.scss';
import './global.scss';
import FeaturedCarousel from './components/featuredCarousel';
import { getAllItems } from './database/items';

export default async function Home() {
  const allItems = await getAllItems();
  return (
    <div className="hero-page-container">
      <div className="hero-page">
        <h1 className="hero-title">Wizard x Shack 2023 Winter</h1>
        <img
          src="./main-page-wizard.jpg"
          alt="hero"
          className="hero-image-one"
        />
        <img src="./winter-witch.jpg" alt="hero2" className="hero-image-two" />
      </div>
      <FeaturedCarousel items={allItems} />
    </div>
  );
}
