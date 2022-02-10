import React from 'react';
import { DataPreview } from './DataPreview';

export const wrapPageElement = ({ element, props }, {onlyDev}) => (
  <>{element}

  {(process.env.NODE_ENV === 'development' || !onlyDev)  && (
  <DataPreview data={props} />
  )}
  </>
);