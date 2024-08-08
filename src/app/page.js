import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Arquitecturas</h1>
      <ol>
        <li><Link href="/pag1"> API / ClientComponent </Link></li>
        <li><Link href="/pag2"> Action / ClientComponent </Link></li>
        <li><Link href="/pag3"> Action / ServerComponent </Link></li>
        <li><Link href="/pag4"> Action / ServerComponent / ClientComponent </Link></li>
      </ol>
    </main>
  );
}
