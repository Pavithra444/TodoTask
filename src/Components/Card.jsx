import React from "react";
import { useState } from 'react'
import PropTypes from 'prop-types';


export default function Card(props) {
    const [statusOption, setSelectedOption] = useState(props.taskstatus)
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    // const [items, setItems] = useState(props.data);
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const handleDelete = (index) => {
        // const newItems = props.data.filter((_, i) => i !== index);
        const newItems=[...props.data];
        newItems.splice(index,1);
        props.setdata(newItems);
             
        console.log("afterdeletion:"+JSON.stringify(newItems));
    
      };  

      const handleEdit = (index) => {
       
        const newItems=[...props.data];
        console.log(taskname.value);
        newItems[index].name=name;
        newItems[index].description=description;
        newItems[index].taskstatus=statusOption;
        
        props.setdata(newItems);
        console.log("afterEdit:"+JSON.stringify(newItems));
      }; 
    return <div className="TodoList">
                <div className = "card1" >
                   Name : <input id="taskname" defaultValue= {props.name} onChange={(e) => setName(e.target.value)} ></input>
                   <br></br>
                   Description:<input id="taskDesc" defaultValue={props.description} onChange={(e) => setDescription(e.target.value)}></input>
                   <br></br>
                   Status:<select className="Statusoptions" value={statusOption} onChange={handleChange}>
                        <option value="NotCompleted">Not Completed</option>
                        <option value="Completed">Completed</option>
                      </select>
                      <div className="btnPart">
                      <button id="editbtn" className='AddButton' onClick={() => handleEdit(props.index)} >Save</button>
                      <button id="deletebtn" className='AddButton' onClick={() => handleDelete(props.index)} >Delete</button>
                      </div>
               </div>
        </div>
}

Card.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    taskstatus: PropTypes.string,
};

