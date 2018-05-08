import React from 'react';
import { Package } from './Package';

const Packages = props => (
  <ul className="packages">
    <Package
      howToUpdate={props.howToUpdate}
      packageTitle="govuk template"
      versions={props.packageInfo.template}
    />
    <Package
      howToUpdate={props.howToUpdate}
      packageTitle="govuk elements"
      versions={props.packageInfo.elements}
    />
    <Package
      howToUpdate={props.howToUpdate}
      packageTitle="govuk frontend toolkit"
      versions={props.packageInfo.toolkit}
    />
  </ul>
);

export { Packages };
