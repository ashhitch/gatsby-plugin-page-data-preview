import React from 'react';
import { DataPreview } from './DataPreview';

export const wrapPageElement = ({ element, props }) => (
  <>{element}
  {process.env.NODE_ENV === "development" && (
  <DataPreview data={props} />
  )}
  </>
);