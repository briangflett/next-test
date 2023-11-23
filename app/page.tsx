import Image from "next/image";

export default function Home() {
  function doStuff() {
    const a = 1;
    const b = 2;
    debugger; // This will set a breakpoint here
    const c = a + b;
    console.log(c);
    return c;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">
        Next.js App for Debugging.
      </h1>
      {doStuff()}
      <p>This is a short paragraph</p>
    </main>
  );
}
