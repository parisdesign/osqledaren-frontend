import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Layout from '../organisms/Layout';
import InfoWrapper from '../molecules/InfoWrapper';
import styled from '../styles/styled';
import H from '../atoms/H';
import P from '../atoms/P';

const Subscribe: FunctionComponent = () => {
  return (
    <Layout>
      <InfoWrapper>
        <TipsContainer>
          <TipsText>
            <H variant="3">Skicka in tips till Osqledaren!</H>
            <P>
              Det går utmärkt att maila oss på osqledaren@ths.se om du har ett
              tips rörande något vi kan skriva om i tidningen.
            </P>
            <H variant="4">Insändare</H>
            <P>
              Vill du istället skriva en insändare till tidningen? Följ
              instruktionerna <Link to="/insandare">här</Link>.
            </P>
          </TipsText>
        </TipsContainer>
      </InfoWrapper>
    </Layout>
  );
};
export default Subscribe;

const TipsText = styled.div`
  margin-top: 20px;
  max-width: 800px;
`;

const TipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  padding: 0 5%;
  margin: 20px 0;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 350 + 'px'}) {
    flex-direction: column;
  }
`;
