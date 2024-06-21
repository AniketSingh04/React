import React, { act, useReducer } from 'react';

const intialState = {
    data : [],
    loading : false,
    error : null
};

function reducer(state, action){
    switch(action.type){

        case 'Fetch_Data_Start' :
            return {...state, loading:true};

        case 'Fetch_Data_Successful' :
            return {loading:false, data: action.payload, error:null};
        
        case 'Fetch_Data_Failed' :
            return {...state, loading:false, error:action.payload};

        case 'Add_Data' :
            return {...state, data:[...state.data,action.payload]};
        
        case 'Delete_Data' :
            return {...state,
                data: state.data.filter((item)=>
                    item.id !== action.payload
                )
            }
    }

};

const UseReducer2 = () => {

    const [state, dispatch] = useReducer(reducer, intialState);

    const fetchData = async ()=>{
        dispatch({type : "Fetch_Data_Start"});
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            dispatch({type:"Fetch_Data_Successful", payload : data});
            console.log(data);
        }catch(error){
            dispatch({type : "Fetch_Data_Failed", payload : error.message});
        }
    };

    const addData = (newData)=>{
        dispatch({type: "Add_Data", payload: newData})
    };

    const deleteData = (id)=>{
        dispatch({type: 'Delete_Data', payload:id});
    };

  return (
    <div>
        <button onClick={fetchData}>Fetch Data</button>
        {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error}</p>}
        <ul>
            {
                state.data.map((item)=>(
                     <li key={item.id}>
                        {item.title}{' '}
                        <button onClick={()=> deleteData(item.id)}>
                            Delete
                        </button>
                    </li>
                ))
            }
        </ul>
        <form onSubmit={(e)=>{
            e.preventDefault();
            addData({
                id:Date.now,
                title:e.target.title.value,
            })
        }}>
            <input type='text' name ='title' placeholder='Add new item'/>
            <button type='Submit'>Add</button>
        </form>
    </div>
  )
}

export default UseReducer2
