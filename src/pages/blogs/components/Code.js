import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ children }) => {
  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
