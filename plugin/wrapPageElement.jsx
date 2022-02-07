import React from 'react';


export const wrapPageElement = ({ element, props }) => (
  <>{element}
  <DataPreview data={props} />
  </>
);