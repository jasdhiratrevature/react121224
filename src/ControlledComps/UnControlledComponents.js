import { useState } from "react";
const UnControlledComponents = () => {
    const [value, setValue] = useState('Hello React');

    const handleChange = event => setValue(event.target.value);
    return (
        <div>
        <label>
          My  uncontrolled Input:
          <input type="text" onChange={handleChange} />
        </label>
  
        <p>
          <strong>Output:</strong> {value}
        </p>
      </div>
      );
}
 
export default UnControlledComponents;