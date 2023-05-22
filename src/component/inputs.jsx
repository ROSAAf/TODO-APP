import React,{useState} from "react";

function Input(props){
    const [color,setColor] = useState(false)
    const [note,setNote] = useState("");

    function MouseOver(){
        setColor(true)
    }

    function MouseOut(){
        setColor(false)
    }

    function HandelChanges(event){
        const value = event.target.value;
        setNote(value)

    }
    
    return(
        <div>
            <h1>Note Taking App</h1>
            <div className="form">
                <input type="text" name="note" placeholder="Enter your note" 
                onChange={HandelChanges} value={note}/>

                <button type="btn" onMouseOver={MouseOver} onMouseOut={MouseOut}
                style={{backgroundColor:color?"cadetblue":"pink"}}
                onClick={()=>{
                    props.onAdd(note);
                    setNote("")
                }}
                >
                    Take note
                </button>
            </div>
        </div>
    )
}

export default Input;