import React, { useState } from "react";
import { JSONTree } from "react-json-tree";
import { Portal } from "./Portal";

import * as containerStyles from "./style.module.css";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const theme = {
  scheme: "google",
  author: "seth wright (http://sethawright.com)",
  base00: "#1d1f21",
  base01: "#282a2e",
  base02: "#373b41",
  base03: "#969896",
  base04: "#b4b7b4",
  base05: "#c5c8c6",
  base06: "#e0e0e0",
  base07: "#ffffff",
  base08: "#CC342B",
  base09: "#F96A38",
  base0A: "#FBA922",
  base0B: "#198844",
  base0C: "#3971ED",
  base0D: "#3971ED",
  base0E: "#A36AC7",
  base0F: "#3971ED",
};

const darkTheme = {
  scheme: 'custom',
  author: 'Ash',
  base00: '#1e1e1e',
  base01: '#323537',
  base02: '#464b50',
  base03: '#5f5a60',
  base04: '#838184',
  base05: '#a7a7a7',
  base06: '#c3c3c3',
  base07: '#ffffff',
  base08: '#cf6a4c',
  base09: '#cda869',
  base0A: '#f9ee98',
  base0B: '#8f9d6a',
  base0C: '#afc4db',
  base0D: '#7587a6',
  base0E: '#9b859d',
  base0F: '#9b703f'
};

export const DataPreview = ({ data }) => {
  const [show, setShow] = useState(false);

  const darkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return (
    <Portal id="preview-blade-portal">
      <div
        className={`${containerStyles.pageDataPreviewWrap} ${
          show ? `${containerStyles.isActive}` : ""
        }`}
      >
        <button
          type="button"
          className={containerStyles.pageDataPreviewAction}
          onClick={() => setShow((s) => !s)}
        >
          {show ? "❌" : "🔨"}
        </button>
        {show && (
          <div className={containerStyles.pageDataPreview}>
            <div className={containerStyles.pageDataPreviewContent}>
              <h2>URI: {data.uri}</h2>
              {data?.data && !isEmpty(data.data) && (
                <div className={containerStyles.pageDataPreviewItem}>
                  <h3>Page Data</h3>
                  <JSONTree
                    data={data.data}
                    theme={darkMode ? darkTheme : theme}
                    hideRoot
                  />
                </div>
              )}
              {data?.pageContext && !isEmpty(data.pageContext) && (
                <div className={containerStyles.pageDataPreviewItem}>
                  <h3>Page Context</h3>
                  <JSONTree
                    data={data.pageContext}
                    theme={darkMode ? darkTheme : theme}
                    hideRoot
                  />
                </div>
              )}
              {data?.serverData && !isEmpty(data.serverData) && (
                <div className={containerStyles.pageDataPreviewItem}>
                  <h3>SSR Data</h3>
                  <JSONTree
                    data={data.serverData}
                    theme={darkMode ? darkTheme : theme}
                    hideRoot
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Portal>
  );
};
