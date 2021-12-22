import React from "react";
import Featured from "../component/Featured";
import styled from "styled-components";
import Chart from "../component/AddChart";

const Container = styled.div`
  flex: 4;
`;
const Home = () => {
  return (
    <Container>
      <Featured />
      <Chart />
    </Container>
  );
};

export default Home;
