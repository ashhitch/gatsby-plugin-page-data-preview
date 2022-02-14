import React from 'react';
import ReactDOM from 'react-dom';


export const Portal = ({ children, id }) => {
  const portalEl = typeof document !== `undefined` ? document.getElementById(id) : null;

  if (portalEl) {
    return ReactDOM.createPortal(children, portalEl);
  }
  return null;
};
