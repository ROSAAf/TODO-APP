import React,{useState} from "react";
import Items from "./toDoItem";
import Input from "./inputs";

function App(){
    const [items,setitems] = useState([]);  

    function Checked(id){
        setitems(prevValue=>{
            return prevValue.filter((item,index)=>{return index!==id;})
        })
    }

    function TakeNote(note){
        setitems(prevItems=>{
            return [...prevItems,note]
        });
    }
    return (
        <div>
            <Input
            onAdd={TakeNote}
            />
            <div className="notes">
                <ul>
                    {items.map((item,index) => <Items key={index} id={index} value={item} onChecked={Checked}/>)}
                </ul>
            </div>
        </div>
    )
}

export default App;