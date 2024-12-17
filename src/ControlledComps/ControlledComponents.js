import { useState } from "react";
const ControlledComponents = () => {
    const [value, setValue] = useState('Hello React');

    const handleChange = event => setValue(event.target.value);
    return ( 
        <div>
        <label>
          My  Controlled Input:
          <input type="text" value ={value} onChange={handleChange} />
        </label>
  
        <p>
          <strong>Output:</strong> {value}
        </p>
      </div>
     );
}
 
export default ControlledComponents;