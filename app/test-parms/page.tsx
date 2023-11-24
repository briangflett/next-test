import { Metadata } from "next";
import { NextPage } from "next";

export const metadata: Metadata = {
  title: "Test Page",
};

interface IParams {
  hero: string;
  myCard: string;
  action: string;
}

interface IProps {
  searchParams: IParams;
}

export default function TestPage({ searchParams }: IProps) {
  return (
    <main>
      <h1>Test Parms Server Page</h1>Breadcrumb
      <p>
        This is a test page from the app router. It has been passed these
        parameters... hero: {searchParams.hero}, myCard: {searchParams.myCard},
        action: {searchParams.action}
      </p>
    </main>
  );
}
