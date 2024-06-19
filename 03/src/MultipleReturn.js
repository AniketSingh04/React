import React, { useEffect, useState } from 'react'

const MultipleReturn = () => {

    const [users, setUsers] = useState([]); //state initialization for users
    const [isLoading, setIsLoading] = useState(true); //state initialization for checking data loading
    const  [error, setError] = useState(null); //state initialization for errors

    useEffect(()=>{
        async function fetchUsers(){
            try{
                const response = await fetch("https://api.github.com/users");   
                const data = await response.json();
                setUsers(data); //data is sent to current state
                setIsLoading(false); //data is fetched and hence loading is set false as no more loading
            }
            catch(error){
                setError(error); //error is sent to current state
                setIsLoading(false); //although error occured, loading is still not happening and hence false
            }
        }
        fetchUsers();
    })

    if(isLoading){
        return <p>Loading ...</p>
    }
    if(error){
        return <p>Error : {error.message}</p>
    }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {
            users.map(user =>{
                return <li key={user.id}>
                    <a href={user.html_url}>{user.login}</a>
                    </li>
            })
        }
      </ul>
    </div>
  )
}

export default MultipleReturn

/*
This code is a React functional component 
named MultipleReturn that fetches a list 
of users from the GitHub API and displays them. 
It also handles loading states and errors 
during the data fetch process.
*/