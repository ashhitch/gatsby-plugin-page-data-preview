import React from "react";
import { Link } from "gatsby";

const SSRPage = ({ serverData }) => {
  return (
    <main>
      <header>
        <h1>
          <span role="img" aria-label="Party popper emoji">
            🎉&nbsp;
          </span>
          Gatsby Data Preview SSR Example
          <span role="img" aria-label="Party popper emoji">
            &nbsp;🎉
          </span>
          <div>
            <img alt="Happy dog" src={serverData.message} style={{maxWidth: '400px', height: 'auto'}}/>
          </div>
        </h1>
      </header>
      <article>
        <Link to="/">Back Home</Link>
      </article>
    </main>
  );
};

export default SSRPage;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
