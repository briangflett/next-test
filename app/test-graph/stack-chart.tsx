import {
  AreaChart,
  BarChart,
  Card,
  Flex,
  Switch,
  Title,
  Grid,
  Col,
  Subtitle,
} from "@tremor/react";

export default function StackChart() {
  /* not sure where this comes from, so hard coding it for now */
  const stackData = [
    { name: "Stack1", Bottom: 55, Top: 45 },
    { name: "Stack2", Bottom: 60, Top: 40 },
    { name: "Stack3", Bottom: 65, Top: 35 },
  ];
  console.log(`stackData = `, stackData);

  return (
    <>
      <Grid numItems={4} className="border-2 border-solid  border-green-500 ">
        <Col numColSpan={4}>
          <Card>
            <BarChart
              // className="h-38"
              data={stackData}
              index="name"
              categories={["Bottom", "Top"]}
              colors={["blue", "red"]}
              stack={true}
              // valueFormatter={valueFormatter}
              // showXAxis={false}
              // showYAxis={false}
              // showLegend={false}
            />
          </Card>
        </Col>
      </Grid>
    </>
  );
}
