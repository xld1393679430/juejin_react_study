import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import dedent from 'dedent'
import './index.css'

const Code = ({ children, tab, minHeight }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      showLineNumbers={true}
      wrapLines={true}
      style={vscDarkPlus}
      class={ minHeight ? 'SyntaxHighlighter-Container-MinHeight' : '' }
    >{(tab ? "\t\t" : "") + dedent(children)}</SyntaxHighlighter>
  );
};

export default Code;
