import { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState("")
  return (
    <div className = "page_main">
      <div className = "TheScreen">
        <div className = 'Header'>
          <h1>Phishing Tester</h1>
        </div>
        <div className ='contentBody'>
          <div className = 'theStartBtn'>
            <button className="startBtn">Submit</button>
            <button className="resetBtn">Reset</button>
          </div>
          <div className = 'bodySplit'>
            <div className = 'split1'>
              <textarea
               placeHolder ="Add Text Here"
               value={input} 
               onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className = 'split2'>2</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
