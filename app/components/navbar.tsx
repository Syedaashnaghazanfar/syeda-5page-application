import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#403429] p-4 font-sans text-white text-2xl">
      <ul className="list-none flex justify-around">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/care">Candle Care Tips</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/candles">Candles</Link></li>
        <li><Link href="/error">Feedback</Link></li>
      </ul>
    </nav>
  );
}
