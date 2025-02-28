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
        alert("Missing Input Text")
       }
      

       console.log(result)
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
               placeholder ="Add Text Here"
               value={input} 
               onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className = 'split2'>
              {
                result != null?(
                  <div>
                    <div>
                      <h2>Probable phishing keywords</h2>
                      <ul>
                      {
                        (result.data.issue.map((word,key)=>{
                          return(
                            <li className="yellowe" key={key}>{word}</li>
                          )
                        }))
                      } 
                      </ul>
                    </div>
                    <div>
                      <h2>Suspicious Phrases:</h2>
                      <ul>
                      {
                        (result.data.errorWords.map((word,key)=>{
                          return(
                            <li className="orangewe" key={key}>{word}</li>
                          )
                        }))
                      } 
                      </ul>
                    </div>
                    <div>
                      <h2>Malicious URLs</h2>
                      <ul>
                      {
                        (result.data.maliciousURL.map((word,key)=>{
                          return(
                            <li className="rewe" key={key}>{word}</li>
                          )
                        }))
                      } 
                      </ul>
                    </div>
                    
                  </div>
                ) : (
                  <p>2</p>
                )
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
