import React, { useState, useEffect } from "react";
import Button from "./Button";
import Editor from './Editor';
import "./index.css";

const BtnList = {
  html: {
    value: "html",
    title: "HTML"
  },
  css: {
    value: "css",
    title: "Css"
  },
  javaScript: {
    value: "javaScript",
    title: "JavaScript"
  }
}

function App() {
  const [openedEditor, setOpenedEditor] = useState("html");
  const [html, setHtml] = useState(`
  <html>
    <head></head>
    <body>
      <h1>Hello，Editor</h1>
      <button onclick="handleClick()">click me</button>
    </body>
  </html>
  `);
  const [css, setCss] = useState(`
  body {
    color: red
  }
  `);
  const [js, setJs] = useState(`
  function handleClick() {
    alert(1)
  }
  `);
  const [srcDoc, setSrcDoc] = useState(` `);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${(js)}</script>
          </html>
        `
      )
    }, 250);
    return () => clearTimeout(timeOut)
  }, [html, css, js])

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  const renderEditor = () => {
    if (openedEditor === BtnList.html.value) {
      return (
        <Editor
          language="xml"
          value={html}
          setEditorState={setHtml}
        />
      )
    } else if (openedEditor === BtnList.css.value) {
      return (
        <Editor
          language="css"
          value={css}
          setEditorState={setCss}
        />
      )
    }
    return (
      <Editor
        language="javascript"
        value={js}
        setEditorState={setJs}
      />
    )
  }

  return (
    <div className="App">
      <p>Welcome to the editor!</p>
      <div className="tab-button-container">
        <Button
          title={BtnList.html.title}
          isActive={openedEditor === BtnList.html.value}
          onClick={() => {
            onTabClick(BtnList.html.value);
          }}
        />
        <Button
          title={BtnList.css.title}
          isActive={openedEditor === BtnList.css.value}
          onClick={() => {
            onTabClick(BtnList.css.value);
          }}
        />
        <Button
          title={BtnList.javaScript.title}
          isActive={openedEditor === BtnList.javaScript.value}
          onClick={() => {
            onTabClick(BtnList.javaScript.value);
          }}
        />
      </div>

      <div className="editor-container">
        {renderEditor()}
      </div>

      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        frameBorder="1"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default App;
