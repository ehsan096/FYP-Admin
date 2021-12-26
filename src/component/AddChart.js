import React, { useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
const Container = styled.div`
  margin-top: 50px;
  padding: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Left = styled.div`
  background-color: white;
  /* padding: 24px 24px 8px; */
  box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 16px 32px -4px;
  border-radius: 16px;

  width: 55%;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  /* padding: 24px 24px 8px; */
  box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 16px 32px -4px;
  border-radius: 16px;
  width: 38%;
`;

const AddChart = ({ iconCategories, categories, shapes, icons, logos }) => {
  console.log(
    "Icons Categories > ",
    iconCategories ? iconCategories.length : 0
  );
  const [options, SetOption] = useState({
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "TEAM A",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "TEAM B",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "TEAM C",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ]);
  const [pieoptions, setPieoptions] = useState({
    chart: {
      width: 280,
      type: "pie",
    },
    labels: ["Icon Categories", "Logo Categories", "Shapes", "Icons", "Logos"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });
  const [pieseries, setPieseries] = useState([
    iconCategories ? iconCategories.length : 0,
    categories ? categories.length : 0,
    shapes ? shapes.length : 0,
    icons ? icons.length : 0,
    logos ? logos.length : 0,
  ]);

  React.useEffect(() => {
    setPieseries([
      iconCategories ? iconCategories.length : 0,
      categories ? categories.length : 0,
      shapes ? shapes.length : 0,
      icons ? icons.length : 0,
      logos ? logos.length : 0,
    ]);
  }, [iconCategories, categories, shapes, icons, logos]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <div id="chart">
            <Chart options={options} series={series} type="line" height={350} />
          </div>
        </Left>
        <Right>
          <div id="chart">
            <Chart
              options={pieoptions}
              series={pieseries}
              type="pie"
              width={380}
            />
          </div>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default AddChart;
