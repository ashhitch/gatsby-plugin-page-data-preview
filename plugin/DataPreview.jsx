import React, { useState } from "react";
import { JSONTree } from "react-json-tree";
import "./style.css";
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
const theme = {
  scheme: "monokai",
  author: "wimer hazenberg (http://www.monokai.nl)",
  base00: "#272822",
  base01: "#383830",
  base02: "#49483e",
  base03: "#75715e",
  base04: "#a59f85",
  base05: "#f8f8f2",
  base06: "#f5f4f1",
  base07: "#f9f8f5",
  base08: "#f92672",
  base09: "#fd971f",
  base0A: "#f4bf75",
  base0B: "#a6e22e",
  base0C: "#a1efe4",
  base0D: "#66d9ef",
  base0E: "#ae81ff",
  base0F: "#cc6633",
};

export const DataPreview = ({ data }) => {
  console.log(data);
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={`page-data-preview-wrap ${show ? "is-active" : ""}`}>
        <button
          type="button"
          className="page-data-preview-action"
          onClick={() => setShow((s) => !s)}
        >
          🧰
        </button>
        {show && (
          <div className="page-data-preview">
            <div className="page-data-preview__content">
              <h2>URI: {data.uri}</h2>
              {data?.data && !isEmpty(data.data) && (
                <div className="page-data-preview__item">
                  <h3>Page Data</h3>
                  <JSONTree
                    data={data.data}
                    theme={theme}
                    invertTheme
                    hideRoot
                  />
                </div>
              )}
              {data?.pageContext && !isEmpty(data.pageContext) && (
                <div className="page-data-preview__item">
                  <h3>Page Context</h3>
                  <JSONTree
                    data={data.pageContext}
                    theme={theme}
                    invertTheme
                    hideRoot
                  />
                </div>
              )}
              {data?.serverData && !isEmpty(data.serverData) && (
                <div className="page-data-preview__item">
                  <h3>SSR Data</h3>
                  <JSONTree
                    data={data.serverData}
                    theme={theme}
                    invertTheme
                    hideRoot
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
