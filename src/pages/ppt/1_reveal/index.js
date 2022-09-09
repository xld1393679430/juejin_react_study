import { useEffect } from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import "./index.css";
const Index = () => {
  useEffect(() => {
    let deck = new Reveal({
      plugins: [Markdown],
    });
    deck.initialize();
  }, []);

  return (
    <div className="reveal-container reveal-viewport">
      <div className="reveal">
        <div className="slides">
          <section>
            <textarea data-template>
              ##Slide1
              我是一段文本 a[link][http://www.baidu.com]
              --
              ## Slide 2
              __
              ## Slide 3
            </textarea>
          </section>
          <section>Horizontal Slide</section>
          <section>
            <section data-state="make-it-pop">Vertical Slide 1</section>
            <section>Vertical Slide 2</section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
