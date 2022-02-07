import React from 'react';
import { DataPreview } from './DataPreview';

export const wrapPageElement = ({ element, props }) => (
  <>{element}
  <DataPreview data={props} />
  </>
);