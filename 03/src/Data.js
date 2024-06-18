import React, { useState } from 'react'; // Import React and useState hook
import datas from "./datas.json"; // Import the data from a JSON file

export default function Data() {
    // Initialize state with the data from the JSON file
    /*
    nData: This is the state variable that holds the current list of items. Initially, it is set to the data imported from datas.json.
    setnData: This is the function that updates nData. When you call this function with a new value,
                React will re-render the component with the updated state.*/
    const [nData, setnData] = useState(datas);
    
    // Log the initial data to the console
    console.log(datas);

    // Function to handle removing an item by its ID
    const handRemove = (itemId) => {
        // Filter out the item with the specified ID and update the state
        setnData(nData.filter(item => item.id !== itemId));
    }

    // Function to handle updating an item's name by its ID
    const handUpdate = (itemId) => {
        // Map over the current data to find and update the item with the specified ID
        setnData(nData.map(items => {
            if (items.id === itemId) {
                // Update the item's name to "newname"
                return { ...items, "name": "newname" }; // Spread operator ensures other properties are retained
            } else {
                // Return the item unchanged if the ID doesn't match
                return items;
            }
        }));
    }

    // Function to handle clearing all data
    const handClick = () => {
        // Set the state to an empty array
        setnData([]);
    }

    // Return the JSX for rendering the component
    return (
        <div>
            <ul>
                {
                    // Map over the data to create a list item for each entry
                    nData.map(items => 
                        <li key={items.id}>
                            {/* Display the item's name */}
                            {items.name}
                            <br/>
                            {/* Button to update the item */}
                            <button onClick={() => handUpdate(items.id)}>Update</button>
                            {/* Button to remove the item */}
                            <button onClick={() => handRemove(items.id)}>Remove</button>
                        </li>
                    )
                }
            </ul>
            {/* Button to clear all items */}
            <button onClick={handClick}>Clear</button>
        </div>
    )
}
