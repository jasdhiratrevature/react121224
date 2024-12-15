import { useState } from "react"
const AddToList = (props) => {
    const [value, setValue] = useState("")
    const setList=props.setList
     const submitHandler=(e)=>{
         e.preventDefault();
        setList((prevList) => {return [...prevList, value]; });
         setValue("");
         }
     return (
         <div>
             <form onSubmit={submitHandler}> 
                <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
                 <button>Add</button>
             </form>
         </div>
     )
}
 
export default AddToList;