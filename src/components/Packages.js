import React from 'react';
import { Package } from './Package';

const Packages = props => (
  <ul className="packages">
    <Package
      howToUpdate={props.howToUpdate}
      packageTitle="gov.uk template"
      npmPackageName="govuk_template_jinja"
      versions={props.packageInfo.template}
    />
    <Package
      howToUpdate={props.howToUpdate}
      packageTitle="gov.uk elements"
      npmPackageName="govuk-elements-sass"
      versions={props.packageInfo.elements}
    />
    <Package
      howToUpdate={props.howToUpdate}
      packageTitle="gov.uk frontend toolkit"
      npmPackageName="govuk_frontend_toolkit"
      versions={props.packageInfo.toolkit}
    />
  </ul>
);

export { Packages };
