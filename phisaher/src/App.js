import { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState(null)

  const checkPhis = async()=>{
       try{
        const response = await axios.post("http://localhost:5000/analyze",{emailContent:input})
        setResult(response)

       }catch(error){
        console.error("Error analyzing email:", error);
       }

       if(result == null)
        alert("Missing Input Text")
  }

  const reset = ()=>{
    setInput("");
    setResult(null);
  }


  return (
    <div className = "page_main">
      <div className = "TheScreen">
        <div className = 'Header'>
          <h1>Phishing Probability Tester</h1>
        </div>
        <div className ='contentBody'>
          <div className = 'theStartBtn'>
            <button className="startBtn" onClick={checkPhis}>Submit</button>
            <button className="resetBtn" onClick={reset}>Reset</button>
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
