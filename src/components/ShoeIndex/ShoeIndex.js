import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS, QUERIES } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <TitleContainer>
            <MobileBreadcrumbs>
              <Breadcrumbs>
                <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
                <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
                <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
              </Breadcrumbs>
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </TitleContainer>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media ${QUERIES.tabletAndUnder} {
    display: none;
  }
`;

const MobileBreadcrumbs = styled.div`
  display: none;
  @media ${QUERIES.tabletAndUnder} {
    display: revert;
  }
`;

const TitleContainer = styled.div``;

const MainColumn = styled.div`
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: relative;
  @media ${QUERIES.tabletAndUnder} {
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
