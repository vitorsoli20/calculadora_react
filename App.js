import React, { useState } from "react";

function Calculadora() {
    const [value, setValue] = useState("");
  
    const handleClick = (event) =>
      {
       setValue(value + event.target.value);
      };
  
    const calcular = () => {
      try
        {
          setValue(eval(value));
        } 
      catch (error)
        {
          setValue("Error");
        }
    };
  
    const clear = () => 
      {
        setValue("");
      };
  
    return (
      
    <div className="container mt-4 container_calculadora">
        <input type="text" value={value} className="form-control mb-4 text-right font-weight-bold visor" />
        <div className="row">
          <div className="col">
            <button onClick={handleClick} value="7" className="btn btn-outline-secondary btn-lg btn-block numeros">7</button>
          </div>
          
          <div className="col">
            <button onClick={handleClick} value="8" className="btn btn-outline-secondary btn-lg btn-block numeros">8</button> 
          </div>
          
          <div className="col">
            <button onClick={handleClick} value="9" className="btn btn-outline-secondary btn-lg btn-block numeros">9</button>
          </div>
        </div>
          
        <div class="row">
          <div className="col">
            <button onClick={handleClick} value="4" className="btn btn-outline-secondary btn-lg btn-block numeros">4</button>
           </div>
          
          <div className="col">
            <button onClick={handleClick} value="5" className="btn btn-outline-secondary btn-lg btn-block numeros">5</button>
          </div>
          <div className="col">
            <button onClick={handleClick} value="6" className="btn btn-outline-secondary btn-lg btn-block numeros">6</button>
          </div>
        </div>
    
      <div className="row">
        <div className="col">
          <button onClick={handleClick} value="1" className="btn btn-outline-secondary btn-lg btn-block numeros">1</button>
        </div>
      
        <div className="col">
          <button onClick={handleClick} value="2" className="btn btn-outline-secondary btn-lg btn-block numeros">2</button>
        </div>
      
        <div className="col">
          <button onClick={handleClick} value="3" className="btn btn-outline-secondary btn-lg btn-block numeros">3</button>
         </div>
      </div> 
         
      <div className="row">
        <div className="col">
         <button onClick={handleClick} value="0" className="btn btn-outline-secondary btn-lg btn-block numeros">0</button>
        </div>
          
        <div className="col">
          <button onClick={handleClick} value="+" className="btn btn-outline-secondary btn-lg btn-block simbolos ">+</button>
        </div>
        
        <div className="col">
          <button onClick={handleClick} value="-" className="btn btn-outline-secondary btn-lg btn-block simbolos">-</button>
         </div>
      </div>
      <div className="row">
      
        <div className="col">
          <button onClick={handleClick} value="*" className="btn btn-outline-secondary btn-lg btn-block simbolos">x</button>
        </div>
        
        <div className="col">
          <button onClick={handleClick} value="/" className="btn btn-outline-secondary btn-lg btn-block simbolos">÷</button>
        </div>
        
        <div className="col">
          <button onClick={clear} value="clear" className="btn btn-outline-secondary btn-lg btn-block simbolos">C</button>
        </div>
     </div>
     <div className="row">
        <div className="col">
          <button onClick={calcular} value="=" className="btn btn-outline-secondary btn-lg btn-block igual">=</button>
     
        </div>
     </div>
    </div>
    );
}

export default Calculadora;
