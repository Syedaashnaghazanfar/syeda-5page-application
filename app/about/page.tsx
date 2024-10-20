import { resolve } from "path";

export default async function About() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  
  return (
    <div className="bg-cover h-screen text-black text-center font-cursive text-4xl bg-[#b99976] flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold mb-8">About Glow Haven</h1>
      <p className="text-3xl">We create eco-friendly, hand-poured candles with love and care.</p>
    </div>
  );
}
