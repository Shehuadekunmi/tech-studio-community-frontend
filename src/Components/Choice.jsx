import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from "react-bootstrap";
import Plus from "../assets/Vector.png"

function MultipleChoiceInput({initialChoices,jobPosterData,setSelectedChoices,selectedChoices,endpoint,error}) {
   
  const [choices, setChoices] = useState([]);
  const [newChoice, setNewChoice] = useState('');
  useEffect(()=>{
    setChoices(initialChoices)
  },[initialChoices])
  console.log();
  const handleAddChoice = () => {
    if (newChoice.trim() !== '') {

        var formdata = new FormData();
        formdata.append("email", jobPosterData.email);
        formdata.append("name", newChoice);
        formdata.append("client_created", true);

        var requestOptions = {
        method: 'POST',
        body: formdata
        };

        fetch(`https://techstudiocommunity.onrender.com/api/jobs/${endpoint}/`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setChoices(prevChoices => [...prevChoices, result]);
        })
        .catch(error => console.log('error', error));
      setNewChoice('');
    }
  };
  const handleCheckboxChange = (e) => {
    const selectedChoice = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedChoices([...selectedChoices, selectedChoice]);
     
    } else {
      setSelectedChoices(selectedChoices.filter(choice => choice !== selectedChoice));
    }
  };
  return (
    <div>
      <div className='d-flex input-con'>
          <input
                type="text"
                placeholder="Add new skill"
                value={newChoice}
                onChange={(e) => setNewChoice(e.target.value)}
                className= {`choice-input form-control ${error && "error"}`}
                    />
         <div>
          <button type="button" className='plus-btn' onClick={handleAddChoice}><img src={Plus} alt="" /></button>
          </div>
        </div>
        <div className='choice-con'>
        {choices && choices.map((choice, index) => (
            
          <div key={index}>
           
              <input
                className='checked-icon'
                id={`${endpoint}${index}`}
                type="checkbox"
                name="choices"
                value={choice.id}
                onChange={handleCheckboxChange}
              /> 

            <label htmlFor={`${endpoint}${index}`} className='checked-text'>{choice.name}</label>
          </div>
        ))}
        
        </div>
    </div>
  );
}

export default MultipleChoiceInput;
