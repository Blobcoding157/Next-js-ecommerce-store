import ProductElement from './ProductElement';

export default function CartPage() {
  return (
    <>
      <h1>Your Magical Bag</h1>
      <div>
        products go here
        <ul>
          <ProductElement />
        </ul>
      </div>
      <div>
        <h2>Total amount</h2>
        <ul>
          <li>cost</li>
          <li>Shipping</li>
          <li>Tax</li>
          <li>total Cost</li>
        </ul>
        <div>go to checkout button</div>
      </div>
    </>
  );
}
