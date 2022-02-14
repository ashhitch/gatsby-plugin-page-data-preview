import React from "react";
export * from "./wrapPageElement";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div key="preview-blade-portal" id="preview-blade-portal"></div>,
  ]);
};
