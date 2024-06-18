import React, { useState } from 'react'

export default function Form() {

    //State Initialization
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [contact, setContact] = useState('');

    //multiple states to one state
    const [formData, setFormData] = useState({
        "name" : "",
        "email" : "",
        "contact" : "",
    })

    //Event Handlers
    // const handleName = (event)=>{
    //     setName(event.target.value);
    // }
    // const handleEmail = (event)=>{
    //     setEmail(event.target.value);
    // }
    // const handleContact = (event)=>{
    //     setContact(event.target.value);
    // }
    
    //multiple event-handlers to one event-handler
    const handleInput = (event) =>{
        const {name, value} = event.target;

        //The spread operator (...) is used to create a shallow copy of the existing formData object.
        /*The expression inside setFormData creates a new object:
            1. {...formData} copies all existing properties from the current formData state.
            2. [name]: value adds or updates the property whose name is stored in the variable name with the new value. 
        */
        setFormData({...formData, [name] : value});
    }

    //Form Submission Handler
    const handleSubmit = (event)=>{
        event.preventDefault();
        // Perform additional logic here, such as form validation or data submission
    }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={formData.name} name="name" onChange={handleInput}/>
      </label>
      <br/>
      <label>
        Email:
        <input type="text" value={formData.email} name="email" onChange={handleInput}/>
      </label>
      <br/>
      <label>
        Contact:
        <input type="text" value={formData.contact} name="contact" onChange={handleInput}/>
      </label>
      <br/>
      <button type="submit">Submit</button>
    </form>
  )
}

/*
Step-by-Step Working of the Code:

1. Initialization: When the component mounts, useState initializes formData state with empty strings for name, email, and contact.

2. Input Handling: When a user types into any input field (Name, Email, Contact), the onChange event triggers handleInput.
                    handleInput updates the corresponding field (name, email, or contact) in the formData state with the new value.

3. Form Submission: When the user clicks the Submit button, handleSubmit function is called.
                    handleSubmit prevents the default form submission behavior (event.preventDefault()).
                    You can add additional logic in handleSubmit, such as form validation or sending the form data to a server.

This approach efficiently manages form state and handles form input changes in a React component using a single
state object (formData) and a single event handler (handleInput). It ensures that the UI stays synchronized with 
the form state and provides a clear structure for handling form submissions.
*/
