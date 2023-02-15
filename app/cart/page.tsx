import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function CartPage() {
  const cartCookie = getParsedCookie('cart');

  return <div>{cartCookie}</div>;
}
