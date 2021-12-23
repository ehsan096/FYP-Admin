import React from "react";
import styled from "styled-components";
import { HiChartBar } from "react-icons/hi";
const Container = styled.div`
  margin-left: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;
const Welcome = styled.h3`
  color: rgb(33, 43, 54);
  line-height: 1.5;
  padding: 12px;
`;

const WeeklySale = styled.div`
  box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 16px 32px -4px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  width: 230px;
  height: 230px;
  background-color: #c8facd;
  border-radius: 16px;
  cursor: pointer;
`;
const SaleIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #007b55;
  background-image: linear-gradient(
    135deg,
    rgba(0, 123, 85, 0) 0%,
    rgba(0, 123, 85, 0.24) 100%
  );
  border-radius: 50%;

  font-size: 25px;
  width: 60px;
  height: 60px;
`;
const SaleHeading = styled.h2`
  display: flex;
  margin-top: 30px;
  margin-bottom: 10px;
  color: #007b55;
`;
const SaleText = styled.h5`
  color: #579b83;
`;
const AllUser = styled.div`
  box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 16px 32px -4px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 230px;
  height: 230px;
  background-color: #d0f2ff;
  border-radius: 16px;
  cursor: pointer;
`;
const Order = styled.div`
  box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 16px 32px -4px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 230px;
  height: 230px;
  background-color: #fff7cd;
  border-radius: 16px;
  cursor: pointer;
`;
const Earning = styled.div`
  box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 16px 32px -4px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 230px;
  height: 230px;
  background-color: #ffe7d9;
  border-radius: 16px;
  cursor: pointer;
`;

const Featured = ({ users, shapes, icons, logos }) => {
  return (
    <Container>
      <Welcome>Hi, Welcome Back</Welcome>
      <Wrapper>
        <WeeklySale>
          <SaleIcon>
            <HiChartBar />
          </SaleIcon>
          <SaleHeading>{users ? users.length : 0}</SaleHeading>
          <SaleText>Total Users</SaleText>
        </WeeklySale>
        <AllUser>
          <SaleIcon>
            <HiChartBar />
          </SaleIcon>
          <SaleHeading>{shapes ? shapes.length : 0}</SaleHeading>
          <SaleText>Total Shapes</SaleText>
        </AllUser>
        <Order>
          <SaleIcon>
            <HiChartBar />
          </SaleIcon>
          <SaleHeading>{icons ? icons.length : 0}</SaleHeading>
          <SaleText>Total Icons</SaleText>
        </Order>
        <Earning>
          <SaleIcon>
            <HiChartBar />
          </SaleIcon>
          <SaleHeading>{logos ? logos.length : 0}</SaleHeading>
          <SaleText>Total Logo</SaleText>
        </Earning>
      </Wrapper>
    </Container>
  );
};

export default Featured;
