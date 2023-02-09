import React, { useState, useEffect } from "react";
import Button from "./Button";
import Editor from './Editor';

const BtnList = {
  html: {
    value: "html",
    title: "HTML"
  },
  css: {
    value: "css",
    title: "Css"
  },
  js: {
    value: "js",
    title: "Js"
  },
  run: {
    value: "run",
    title: "Run"
  }
}

function Index({ title, cssContent, jsContent, showIframe = true }) {
  const [openedEditor, setOpenedEditor] = useState("html");
  const [html, setHtml] = useState(`
    <html>
      <head></head>
      <body>
        <h1>${title || 'Hello，Editor'}</h1>
        <button onclick="run()">Run</button>
      </body>
    </html>
  `);
  const [css, setCss] = useState(cssContent || `
    body {
      color: red
    }
  `);
  const [js, setJs] = useState(() => {
    if (jsContent) {
      return (
        `
      function run() {
            ${jsContent}
      }
        `
      )
    }

    return jsContent || (
      `
      function run() {
        alert(1)
      }
      `
    )
  });
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
    }

    if (openedEditor === BtnList.css.value) {
      return (
        <Editor
          language="css"
          value={css}
          setEditorState={setCss}
        />
      )
    }

    if (openedEditor === BtnList.js.value) {
      return (
        <Editor
          language="javascript"
          value={js}
          setEditorState={setJs}
        />
      )
    }

    return (
      <Button>{BtnList.run.title}</Button>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', margin: "20px 0" }}>
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
          title={BtnList.js.title}
          isActive={openedEditor === BtnList.js.value}
          onClick={() => {
            onTabClick(BtnList.js.value);
          }}
        />

        <Button
          title={BtnList.run.title}
          onClick={() => {
            const iframe = document.getElementById('editor-iframe')
            iframe.contentWindow.run()
          }}
        />
      </div>

      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        frameBorder="1"
        width="100%"
        height="100%"
        id="editor-iframe"
        style={showIframe ? null : { width: 0, height: 0, border: 0, position: 'absolute', left: 999999999 }}
      />

      <div>
        {renderEditor()}
      </div>
    </div>
  );
}

export default Index;
