"use client";

import { useSearchParams } from "next/navigation";

export default function TestClient() {
  const searchParams = useSearchParams();
  const hero = searchParams?.get("hero");
  const myCard = searchParams?.get("myCard");
  const action = searchParams?.get("action");
  return (
    <main>
      <h1>Test Parms Client Page</h1>
      <p>
        This is a test page from the app router. It has been passed these
        parameters... hero: {hero}, myCard: {myCard}, action: {action}
      </p>
    </main>
  );
}
