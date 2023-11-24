import { Grid, Col } from "@tremor/react";

export default function TestGridPage() {
  return (
    <main className="pt-28 text-lg">
      <h1>Tremor Grid:</h1>
      <Grid
        numItemsSm={1}
        numItemsMd={3}
        numItemsLg={5}
        className="gap-2  text-black"
      >
        <Col numColSpanLg={3} className="bg-red-500">
          A 1,3
        </Col>
        <Col numColSpanLg={2} className="bg-green-500">
          B 1,2
        </Col>
        <Col className="row-span-2 bg-blue-500">C 1,1</Col>
        <Col numColSpanLg={2} className="bg-pink-500">
          D 1,2
        </Col>
        <Col className="bg-yellow-500">E 1,1</Col>
        <Col className="bg-purple-500">F 1,1</Col>
        <Col className="bg-orange-500">G 1,1</Col>
        <Col className="bg-amber-500">H 1,1</Col>
        <Col className="bg-lime-500">I 1,1</Col>
      </Grid>

      <h1 className="pt-6">Tailwind Grid:</h1>
      <section className="grid gap-2 text-black md:grid-cols-3  lg:grid-cols-5 ">
        <div className="bg-red-500 lg:col-span-3">A 1,3</div>
        <div className=" bg-green-500 lg:col-span-2">B 1,2</div>
        <div className=" row-span-2 bg-blue-500">C 1,1</div>
        <div className=" bg-pink-500 lg:col-span-2">D 1,2</div>
        <div className=" bg-yellow-500">E 1,1</div>
        <div className=" bg-purple-500">F 1,1</div>
        <div className=" bg-orange-500">G 1,1</div>
        <div className=" bg-amber-500">H 1,1</div>
        <div className=" bg-lime-500">I 1,1</div>
      </section>
    </main>
  );
}
