import React from "react";
import {  Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <header>
        <h1>
          <span role="img" aria-label="Party popper emoji">
            🎉&nbsp;
          </span>
          Gatsby Data Preview
          <span role="img" aria-label="Party popper emoji">
            &nbsp;🎉
          </span>
        </h1>
      </header>
      <article>
        <Link to="/demo-page">View Generated Demo Page</Link><br />
        <Link to="/ssr">View SSR Demo Page</Link>
      </article>
    </main>
  );
};

export default IndexPage;
