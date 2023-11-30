import BarChart from "./bar-chart";
import StackChart from "./stack-chart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Graph Page",
};

export default function TestGraphPage() {
  return (
    <main>
      <BarChart />
      <StackChart />
    </main>
  );
}
