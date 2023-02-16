import { useState } from 'react';
import Tesseract from 'tesseract.js';

function Index() {
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("")

  const handleChange = (event) => {
    const file = event.target.files[0]
    const path = URL.createObjectURL(file)
    setImagePath(path);
  }

  const handleClick = () => {
    setText("loading....")
    Tesseract.recognize(
      imagePath,
      'chi_sim', // langs: https://github.com/naptha/tesseract.js/blob/master/src/constants/languages.js
      {
        logger: m => {
          console.log(111, m)
        }
      }
    ).then(({ data: { text } }) => {
      setText(text)
    })
  }

  return (
    <div className="App">
      <main className="App-main">
        <h3>Actual image uploaded</h3>
        {
          imagePath ? (
            <img
              src={imagePath} className="App-logo" alt="logo" />
          ) : null
        }

        <h3>Extracted text</h3>
        <div className="text-box">
          <p>text: {text} </p>
        </div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick} style={{height:50}}> convert to text</button>
      </main>
    </div>
  );
}

export default Index
