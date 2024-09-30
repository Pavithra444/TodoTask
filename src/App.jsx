import { useState } from 'react'
import './App.css'
import Card from './Components/Card';

const App = () => {
 
  const [selectedOption, setSelectedOption] = useState('NotCompleted');
  const [data, setdata] = useState([]);

  const AddTaskData = (e) => {
    const { name, value } = e.target;
    const dataCopy = [...data];
    dataCopy.push({
      name: ipname.value,
      description:ipdesc.value,
      taskstatus:'NotCompleted'
     
    })
    setdata(dataCopy);
    ipname.value="";
    ipdesc.value="";
    
  };

  

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      
      <h2>My Todo</h2>
     
      <form onSubmit={handleSubmit}>
        <input id="ipname" className="inputData" placeholder='Todo Name'  value={data.ipname}></input>
        <input id="ipdesc" className="inputData" placeholder='Todo Description' value={data.ipdesc}></input>
        <button className='AddButton' onClick={AddTaskData}>Add Todo</button>
      </form>

      <div className='details'>
        <div>
           My Todos
        </div>
       
        <div>
        Status Filter: <select className="Statusoptions" value={selectedOption} onChange={handleChange} >
                        
                        <option value="Completed">Completed</option>
                        <option value="NotCompleted">Not Completed</option>
                      </select>
        </div>
      </div>
   
  
      {data
      .filter(details =>details.taskstatus === selectedOption)
      .map((details, index) => ( 
             
        <Card
          key={`${details.index}+${details.name}`}
          index={index}
          name={details.name}
          description={details.description}
          taskstatus={details.taskstatus}
          details={details}
          data={data}
          addItem={AddTaskData}
          card={Card}
          setdata={setdata}
      />
    

      ))}
    
    </>
    

  )

  
  
}
 
export default App
