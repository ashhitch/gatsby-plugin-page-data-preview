import React from "react";
import { graphql } from 'gatsby';

const DemoPage = (props) => {
  console.log(props);
  return (
    <main>
      <header>
        <h1>
          <span role="img" aria-label="Party popper emoji">
            🎉&nbsp;
          </span>
          Awsome plugin demo
          <span role="img" aria-label="Party popper emoji">
            &nbsp;🎉
          </span>
        </h1>
      </header>
    </main>
  );
};

export default DemoPage;

export const queryDemo = graphql`
  {
    allSitePage {
      nodes {
        path
      }
    }
  }
`;
