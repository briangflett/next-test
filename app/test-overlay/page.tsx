import Image from "next/image";

export default function TestOverlayPage() {
  return (
    <main>
      <div className="w-64 border-2 border-solid border-green-500 relative">
        <Image
          src="/images/poker_table_vertical.png"
          alt="Kuhn Poker Table"
          layout="responsive"
          width={745}
          height={411}
        />
        <div className="bg-red-500 absolute top-10 left-24 w-16">Player 1</div>
        <div className="bg-red-500 absolute bottom-10 left-24 w-16">
          Player 2
        </div>
      </div>
    </main>
  );
}
