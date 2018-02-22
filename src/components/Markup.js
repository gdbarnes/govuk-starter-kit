import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

// import htmlLanguage from 'react-syntax-highlighter/languages/prism/markup';
// import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
// import { prism } from 'react-syntax-highlighter/styles/prism';
// registerLanguage('markup', htmlLanguage);

const Markup = props => {
  const codeString = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${props.markupOptions.path}</title>
</head>
<body>
  <h1>Some code....</h1>
</body>
</html>`;
  return (
    <SyntaxHighlighter language="markup" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export { Markup };
