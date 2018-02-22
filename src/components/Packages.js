import React from 'react';
import { Package } from './Package';

const Packages = props => (
  <ul className="packages">
    <Package
      howToUpdate={props.howToUpdate}
      packageTitle="govuk template jinja"
      versions={props.packageInfo.template}
    />
    <Package
      howToUpdate={props.howToUpdate}
      packageTitle="govuk elements sass"
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
