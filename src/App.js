import logo from './logo.svg';
import './App.css';
import { createElement,  useState } from 'react';


function DisplayFrame() {
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(true);
  };

  return (
    <div class="frameDiv">
      {showIframe ? (
        <iframe src='./index.html' class="frame"></iframe>
      ) : (
        <button class="frameButton" onClick={handleClick}>Hello</button>
      )}
    </div>
  );
};

export default function Gallery() {
  return (
    <section class="window">
      <h1>Test Iframeception et React</h1>
      <DisplayFrame />
    </section>
  );
}
