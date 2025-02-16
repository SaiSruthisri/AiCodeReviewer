import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import rehypeHighlight from "rehype-highlight"; // Markdown code highlighting
import "highlight.js/styles/github-dark.css"; // Markdown styling
import Markdown from "react-markdown";
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState(`function sum() { return a + b }`);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false); // State to track loading

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true); // Show loading effect
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      setReview("Error fetching review. Please try again.");
    }
    setLoading(false); // Hide loading effect
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>

        <div onClick={reviewCode} className="review">Review</div>
      </div>

      <div className="right">
        {loading ? (
          <div className="loading">🔄 Reviewing your code...</div> // Loading effect
        ) : (
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        )}
      </div>
    </main>
  );
}

export default App;
