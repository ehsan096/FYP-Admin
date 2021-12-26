import React from "react";
import Featured from "../component/Featured";
import styled from "styled-components";
import Chart from "../component/AddChart";

const Container = styled.div`
  flex: 4;
`;
const Home = ({ categories, logos, iconCategories, shapes, icons, users }) => {
  return (
    <Container>
      <Featured users={users} shapes={shapes} icons={icons} logos={logos} />
      <Chart
        iconCategories={iconCategories}
        categories={categories}
        shapes={shapes}
        icons={icons}
        logos={logos}
      />
    </Container>
  );
};

export default Home;
