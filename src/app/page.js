import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Arquitecturas</h1>
      <ul>
        <li><Link href="/pag1"> Action/SSR </Link></li>
        <li><Link href="/pag2"> Action/Client </Link></li>
        <li><Link href="/pag3"> API/Client </Link></li>
      </ul>      
    </main>
  );
}
