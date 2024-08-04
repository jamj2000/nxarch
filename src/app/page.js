import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Arquitecturas</h1>
      <ol>
        <li><Link href="/pag1"> Action / ServerComponent </Link></li>
        <li><Link href="/pag2"> Action / ClientComponent </Link></li>
        <li><Link href="/pag3"> API / ClientComponent </Link></li>
      </ol>      
    </main>
  );
}
