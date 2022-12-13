import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import dedent from 'dedent'

const Code = ({ children, tab }) => {
  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} wrapLines={true}>{ (tab ? "\t\t" : "") + dedent(children)}</SyntaxHighlighter>
  );
};

export default Code;
