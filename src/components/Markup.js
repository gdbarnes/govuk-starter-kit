import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import { markupOptions } from './../helper/constants';

// import htmlLanguage from 'react-syntax-highlighter/languages/prism/markup';
// import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
// import { prism } from 'react-syntax-highlighter/styles/prism';
// registerLanguage('markup', htmlLanguage);

const Markup = props => {
  const { cdnUrl, stylesPath, scriptsPath, imagesPath, minifiedSuffix } = markupOptions;
  const location = props.path === 'absolute' ? '' : cdnUrl;
  const suffix = props.minified ? minifiedSuffix : '';
  const templateVersion = props.packageInfo.template.localVersion;
  const elementsToolkitVersion = `${props.packageInfo.elements.localVersion}.${
    props.packageInfo.toolkit.localVersion
  }`;

  const codeString = `<!DOCTYPE html>
<!--[if lt IE 9]><html class="lte-ie8" lang="en"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en"><!--<![endif]-->
  <head>
    <meta charset="utf-8" />
    <title>ESFA</title>
    
    <!-- TEMPLATE STYLES - START -->
    <!--[if gt IE 8]><!--><link rel="stylesheet" media="screen" href="${location}${stylesPath}govuk-template${suffix}.css?${templateVersion}" /><!--<![endif]-->
    <!--[if IE 6]><link rel="stylesheet" media="screen" href="${location}${stylesPath}govuk-template-ie6${suffix}.css?${templateVersion}" /><![endif]-->
    <!--[if IE 7]><link rel="stylesheet" media="screen" href="${location}${stylesPath}govuk-template-ie7${suffix}.css?${templateVersion}" /><![endif]-->
    <!--[if IE 8]><link rel="stylesheet" media="screen" href="${location}${stylesPath}govuk-template-ie8${suffix}.css?${templateVersion}" /><![endif]-->
    <link rel="stylesheet" media="print" href="${location}${stylesPath}govuk-template-print${suffix}.css?${templateVersion}" />
    <!--[if IE 8]><link rel="stylesheet" media="all" href="${location}${stylesPath}fonts-ie8${suffix}.css?${templateVersion}" /><![endif]-->
    <!--[if gte IE 9]><!--><link rel="stylesheet" media="all" href="${location}${stylesPath}fonts${suffix}.css?${templateVersion}" /><!--<![endif]-->
    <!-- TEMPLATE STYLES - END -->

    <!-- ELEMENTS AND TOOLKIT STYLES - START -->
    <!--[if gt IE 8]><!--><link rel="stylesheet" media="screen" href="${location}${stylesPath}esfa-govuk-base${suffix}.css?${elementsToolkitVersion}" /><!--<![endif]-->
    <!--[if IE 6]><link rel="stylesheet" media="screen" href="${location}${stylesPath}esfa-govuk-ie6${suffix}.css?${elementsToolkitVersion}" /><![endif]-->
    <!--[if IE 7]><link rel="stylesheet" media="screen" href="${location}${stylesPath}esfa-govuk-ie7${suffix}.css?${elementsToolkitVersion}" /><![endif]-->
    <!--[if IE 8]><link rel="stylesheet" media="screen" href="${location}${stylesPath}esfa-govuk-ie8${suffix}.css?${elementsToolkitVersion}" /><![endif]-->
    <!-- ELEMENTS AND TOOLKIT STYLES - END -->
    
    <!--[if lt IE 9]><script src="${location}${scriptsPath}ie.js?${templateVersion}"></script><![endif]-->
    
    <link rel="shortcut icon" href="${location}${imagesPath}favicon.ico" type="image/x-icon" />
    
    <link rel="mask-icon" href="${location}${imagesPath}gov.uk_logotype_crown.svg" color="#0b0c0c">
    <link rel="apple-touch-icon" sizes="180x180" href="${location}${imagesPath}apple-touch-icon-180x180.png">
    <link rel="apple-touch-icon" sizes="167x167" href="${location}${imagesPath}apple-touch-icon-167x167.png">
    <link rel="apple-touch-icon" sizes="152x152" href="${location}${imagesPath}apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" href="${location}${imagesPath}apple-touch-icon.png">
    
    <meta name="theme-color" content="#0b0c0c" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:image" content="${location}${imagesPath}opengraph-image.png">
    
  </head>
  
  <body>
    <script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>

    <div id="skiplink-container">
      <div>
        <a href="#content" class="skiplink">Skip to main content</a>
      </div>
    </div>

    <div id="global-cookie-message">
        <p>GOV.UK uses cookies to make the site simpler. <a href="https://www.gov.uk/help/cookies">Find out more about cookies</a></p>
    </div>

    <header role="banner" id="global-header" class="">
      <div class="header-wrapper">
        <div class="header-global">
          <div class="header-logo">
            <a href="https://www.gov.uk/" title="Go to the GOV.UK homepage" id="logo" class="content">
              <img src="/assets/images/gov.uk_logotype_crown_invert_trans.png" width="36" height="32" alt=""> GOV.UK
            </a>
          </div>
        </div>
      </div>
    </header>
    <div id="global-header-bar"></div>

    <main id="content" role="content">
      <!-- Page content goes here -->
    </main>
      
    <footer class="group js-footer" id="footer" role="contentinfo">
      <div class="footer-wrapper">
        <div class="footer-meta">
          <div class="footer-meta-inner">
            <div class="open-government-licence">
              <p class="logo"><a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence</a></p>
                <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>
            </div>
          </div>
          <div class="copyright">
            <a href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/">© Crown copyright</a>
          </div>
        </div>
      </div>
    </footer>
    <div id="global-app-error" class="app-error hidden"></div>
    
    <script src="${location}${scriptsPath}govuk-template.js?${templateVersion}"></script>
    <script>if (typeof window.GOVUK === 'undefined') document.body.className = document.body.className.replace('js-enabled', '');</script>
  </body>
</html>`;
  return (
    <SyntaxHighlighter language="markup" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export { Markup };
