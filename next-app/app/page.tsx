import Link from "next/link";
import ProductCard from "./Components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello Next, Bharath!!</h1>
      <Link href={"/users"}>Users</Link>
      <ProductCard />
    </main>
  );
}
