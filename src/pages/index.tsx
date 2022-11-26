import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent, useMemo, useState } from 'react';
import { Button } from '../molecules/Button';
import ContentWrapper from '../molecules/ContentWrapper';
import ContentFeed from '../organisms/ContentFeed';
import Layout from '../organisms/Layout';
import { Article } from '../utils/types';

const useContent = () => {
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

  const nextPage = () => setLimit(l => l + 5);

  const content = useMemo(() => allSanityArticle.edges.slice(0, limit), [
    limit,
    allSanityArticle.edges,
  ]);

  const hasMore = allSanityArticle.edges.length >= limit;

  return { hasMore, content, nextPage };
};

const Index: FunctionComponent = () => {
  const { content, hasMore, nextPage } = useContent();

  return (
    <Layout>
      <ContentWrapper>
        <ContentFeed content={content} />
        {hasMore && <Button onClick={nextPage}>{'Läs mer'}</Button>}
      </ContentWrapper>
    </Layout>
  );
};
export default Index;
