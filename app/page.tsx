import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function doStuff() {
    const a = 1;
    const b = 2;
    // debugger; // This will set a breakpoint here
    const c = a + b;
    console.log(c);
    return c;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl font-bold text-center">
        Next.js App for Debugging.
      </h1>
      <Link href="/test-graph" className="text-blue-500 underline">
        Test Graph
      </Link>
      <Link href="test-grid" className="text-blue-500 underline">
        Test Grid
      </Link>
      <Link href="test-grid-2" className="text-blue-500 underline">
        Test Grid 2 (pokertable)
      </Link>
      <Link href="test-parms" className="text-blue-500 underline">
        Test Parms
      </Link>
      <Link href="test-overlay" className="text-blue-500 underline">
        Test Overlay
      </Link>
      {doStuff()}
      <p>This is a short paragraph at the end of the test homepage</p>
    </main>
  );
}
