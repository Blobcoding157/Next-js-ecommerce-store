import '../global.scss';
import '../styles/checkoutPage.scss';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-input-list-item">
          <input
            className="checkout-input"
            placeholder="FIRST NAME"
            data-test-id="checkout-first-name"
          />
        </div>
        <div className="checkout-input-list-item">
          <input
            className="checkout-input"
            placeholder="LAST NAME"
            data-test-id="checkout-last-name"
          />
        </div>
        <div className="checkout-input-list-item">
          <input
            className="checkout-input"
            placeholder="E-MAIL"
            data-test-id="checkout-email"
          />
        </div>
        <div className="checkout-input-list-item">
          <input
            className="checkout-input"
            placeholder="ADDRESS"
            data-test-id="checkout-address"
          />
        </div>
        <div className="checkout-input-list-item">
          <input
            className="checkout-input"
            placeholder="CITY"
            data-test-id="checkout-city"
          />
        </div>
        <div className="checkout-input-list-item">
          <input
            className="checkout-input"
            placeholder="POSTAL CODE"
            data-test-id="checkout-postal-code"
          />
        </div>
        <div className="checkout-input-list-item">
          <input
            className="checkout-input"
            placeholder="COUNTRY"
            data-test-id="checkout-country"
          />
        </div>
        <div className="checkout-input-list-item">
          <input
            className="checkout-input"
            placeholder="CREDIT CARD"
            data-test-id="checkout-credit-card"
          />
        </div>
        <div className="checkout-input-list-item">
          <input
            className="checkout-input"
            placeholder="EXPIRATION DATE"
            data-test-id="checkout-expiration-date"
          />
        </div>
        <div className="checkout-input-list-item">
          <input
            className="checkout-input"
            placeholder="SECURITY CODE"
            data-test-id="checkout-security-code"
          />
        </div>
        <div className="checkout-button-container">
          <Link href="./thankYou">
            <button
              className="checkout-button"
              data-test-id="checkout-confirm-order"
            >
              Conform Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
