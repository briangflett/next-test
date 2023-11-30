import {
  AreaChart,
  BarChart,
  Card,
  Flex,
  Switch,
  Title,
  Subtitle,
} from "@tremor/react";

export default async function Chart() {
  const chartdata = [
    {
      name: "Amphibians",
      "Number of threatened species": 2488,
      b: 300,
    },
    {
      name: "Birds",
      "Number of threatened species": 1445,
      b: 300,
    },
    {
      name: "Crustaceans",
      "Number of threatened species": 743,
      b: 300,
    },
    {
      name: "Ferns",
      "Number of threatened species": 281,
      b: 300,
    },
    {
      name: "Arachnids",
      "Number of threatened species": 251,
      b: 300,
    },
    {
      name: "Corals",
      "Number of threatened species": 232,
      b: 300,
    },
    {
      name: "Algae",
      "Number of threatened species": 98,
      b: 300,
    },
  ];

  const valueFormatter = (number: number) =>
    `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <Card>
      <Title>Number of species threatened with extinction (2021)</Title>
      <Subtitle>
        The IUCN Red List has assessed only a small share of the total known
        species in the world.
      </Subtitle>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={["Number of threatened species", "b"]}
        colors={["blue"]}
        // valueFormatter={valueFormatter}
        yAxisWidth={48}
        stack={true}
      />
    </Card>
  );
}
