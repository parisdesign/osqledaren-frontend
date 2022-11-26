import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import ContentFeed from '../organisms/ContentFeed';
import { useStaticQuery, graphql } from 'gatsby';
import { Article } from '../utils/types';
import ContentWrapper from '../molecules/ContentWrapper';
import { useMemo } from 'react';
import { useState } from 'react';
import styled from '../styles/styled';
import { Button } from '../molecules/Button';

const Index: FunctionComponent = () => {
  const [limit, setLimit] = useState(5);

  const { allSanityArticle } = useStaticQuery<{
    allSanityArticle: {
      edges: {
        node: Article;
      }[];
    };
  }>(graphql`
    query {
      allSanityArticle(limit: 100, sort: { fields: _createdAt, order: DESC }) {
        edges {
          node {
            ...Article
          }
        }
      }
    }
  `);

  const increaseLimit = () => setLimit(l => l + 5);

  const content = useMemo(
    () => allSanityArticle.edges.slice(0, limit > 100 ? 100 : limit),
    [limit, allSanityArticle.edges]
  );

  return (
    <Layout>
      <ContentWrapper>
        <ContentFeed content={content} />
        <Button onClick={increaseLimit}>{'Läs mer'}</Button>
      </ContentWrapper>
    </Layout>
  );
};
export default Index;
