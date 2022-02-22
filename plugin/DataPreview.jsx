import React, { useState } from "react";
import { JSONTree } from "react-json-tree";
import { Portal } from "./Portal";

import * as containerStyles from "./style.module.css"

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const theme = {
  scheme: 'google',
  author: 'seth wright (http://sethawright.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#CC342B',
  base09: '#F96A38',
  base0A: '#FBA922',
  base0B: '#198844',
  base0C: '#3971ED',
  base0D: '#3971ED',
  base0E: '#A36AC7',
  base0F: '#3971ED'
};

export const DataPreview = ({ data }) => {

  const [show, setShow] = useState(false);
 
  return (
    <Portal id="preview-blade-portal">
      <div className={`${containerStyles.pageDataPreviewWrap} ${show ? `${containerStyles.isActive}`: ""}`}>
        <button
          type="button"
          className={containerStyles.pageDataPreviewAction}
          onClick={() => setShow((s) => !s)}
        >
          {show ?  '❌' :  '🔨'}
        </button>
        {show && (
          <div className={containerStyles.pageDataPreview}>
            <div className={containerStyles.pageDataPreview__content}>
              <h2>URI: {data.uri}</h2>
              {data?.data && !isEmpty(data.data) && (
                <div className={containerStyles.pageDataPreviewItem}>
                  <h3>Page Data</h3>
                  <JSONTree
                    data={data.data}
                    theme={theme}
                    
                    hideRoot
                  />
                </div>
              )}
              {data?.pageContext && !isEmpty(data.pageContext) && (
                <div className={containerStyles.pageDataPreviewItem}>
                  <h3>Page Context</h3>
                  <JSONTree
                    data={data.pageContext}
                    theme={theme}
                    
                    hideRoot
                  />
                </div>
              )}
              {data?.serverData && !isEmpty(data.serverData) && (
                <div className={containerStyles.pageDataPreviewItem}>
                  <h3>SSR Data</h3>
                  <JSONTree
                    data={data.serverData}
                    theme={theme}
                    
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
