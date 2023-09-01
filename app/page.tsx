import './styles/hero-page.scss';
import './global.scss';
import { getAllItems } from './database/items';

export default async function Home() {
  const allItems = await getAllItems();
  return (
    <div className="background">
      <img
        className="mainLogo"
        alt="Welcome to WizardShack"
        src="/wizard-mp-t.png"
      />

      <h1>WELCOME TO WIZARDSHACK</h1>
      <p>
        We are a small shop located in the heart of Diagon Alley. We sell
        everything a wizard needs to get through their school years and beyond.
        We have a wide selection of wands, brooms, robes and potions. We also
        have a small selection of books and other items at our store.
      </p>
      <p>
        We are open every day from 9am to 5pm. If you have any questions, please
        contact us at:
      </p>
      <p>Phone: 123-456-789</p>
    </div>
  );
}
