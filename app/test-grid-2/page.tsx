import { Grid, Col } from "@tremor/react";
import Image from "next/image";

export default function TestGrid2Page() {
  return (
    <main className="border-2 border-solid border-red-500">
      Poker Table...
      <div className="border-2 border-solid border-green-500 w-full">
        <Image
          src="/images/poker_table_vertical.png"
          alt="Kuhn Poker Table"
          width={411}
          height={745}
          layout="responsive"
        />
      </div>
    </main>
  );
}
