import React from "react";
import styled from "styled-components";
import InfoPage from "./infoPage";

const ContainerWrapper = styled.div``;

const BottomContainer = styled.div`
  background: #a52a2a;
  color: #fff;
  font-size: 1.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1.2rem;
`;

const TextHeader = styled.h3`
  margin-bottom: 0.2rem;
`;

const ExchangeScreen = ({ router }) => {
  const removeDash = (value: string, position: number, index: number) => {
    return value.split("?")[position].split("&")[index].split("_").join(" ");
  };

  return (
    <InfoPage>
      <ContainerWrapper>
        <HeaderContainer>
          <TextHeader>Email</TextHeader>
          <TextHeader>{removeDash(router.location.search, 1, 0)}</TextHeader>
        </HeaderContainer>
        <HeaderContainer>
          <TextHeader>Premio</TextHeader>
          <TextHeader>{removeDash(router.location.search, 1, 1)}</TextHeader>
        </HeaderContainer>
        <HeaderContainer>
          <TextHeader>Comercio</TextHeader>
          <TextHeader>{removeDash(router.location.search, 1, 2)}</TextHeader>
        </HeaderContainer>
        <BottomContainer>Sin Canjear</BottomContainer>
      </ContainerWrapper>
    </InfoPage>
  );
};

export default ExchangeScreen;
