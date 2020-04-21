import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from '../styles/styled';
import H from '../atoms/H';
import P from '../atoms/P';
import Img from 'gatsby-image';
import Layout from '../organisms/Layout';

const About: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      staff: file(relativePath: { eq: "staff.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <AboutContainer>
        <AboutText>
          <H variant="3">Om Osqledaren</H>
          <P size="19" lh="22">
            Osqledaren är Tekniska Högskolans Studentkårs tidning som når ut
            till alla KTHs kårmedlemmar i cirka 10 000 exemplar, fyra gånger per
            läsår. Tidningen har till uppgift att bevaka kåren och KTH, men
            skriver också om andra ämnen som kan vara intressanta för
            teknologstudenter; som till exempel nöje, teknik, karriär och
            utbildning.
          </P>
          <P size="19" lh="22">
            Vill ni annonsera i Osqledaren?{' '}
            <Link to="/advertize">Klicka här!</Link>
          </P>
        </AboutText>

        <Contact>
          <H variant="3">Kontaktuppgifter</H>
          <ContactList>
            <P size="19" lh="22">
              <li>Chefredaktör: Robin Kammerlander</li>
              <br />
              <li>Ansvarig utgivare:</li>
              <li>Simon Sundin</li>
              <li>076 58 74 666</li>
              <li>
                <a href="mailto:osqledaren@ths.kth.se">osqledaren@ths.kth.se</a>
              </li>
              <br />
              <li>Kårhuset Nymble, Drottning Kristinas väg 19 </li>
              <li>Osqledaren, THS, 100 44 Stockholm</li>
            </P>
          </ContactList>
        </Contact>
        <ImageWrapper>
          <Img fluid={data.staff.childImageSharp.fluid} />
        </ImageWrapper>
      </AboutContainer>
    </Layout>
  );
};
export default About;

const Contact = styled.div`
  margin-top: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 280 + 'px'}) {
    order: 3;
  }
`;

const ContactList = styled.ol`
  list-style: none;
  padding: 0px;
`;

const ImageWrapper = styled.div`
  width: 80vw;
`;

const AboutText = styled.div`
  margin-top: 20px;
  max-width: 800px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 280 + 'px'}) {
    max-width: 90vw;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  padding: 0 5%;
  margin: 0 5%;
  margin-top: 20px;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 280 + 'px'}) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`;
