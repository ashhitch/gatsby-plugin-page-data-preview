import React from "react";
import { graphql, Link } from 'gatsby';

const DemoPage = (props) => {
  return (
    <main>
      <header>
        <h1>
          <span role="img" aria-label="Party popper emoji">
            🎉&nbsp;
          </span>
          Demo Page
          <span role="img" aria-label="Party popper emoji">
            &nbsp;🎉
          </span>
        </h1>
      </header>
      <article>
        <Link to="/">Back Home</Link>
      </article>
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
