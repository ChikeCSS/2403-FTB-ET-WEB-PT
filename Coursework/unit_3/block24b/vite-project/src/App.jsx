import "./App.css";
//Navigate to the App.jsx file and import `useState` from react
import { useState } from "react";

function App() {
  //Using `useState` create a state for our pets
  const [pets, setPets] = useState([
    { id: 1, name: "Thor", type: "cat", age: "6" },
    { id: 2, name: "Loki", type: "cat", age: "8" },
    { id: 3, name: "Deku", type: "dog", age: "3" },
  ]);
  //Using `useState` create a state for our new pets
  const [newPets, setNewPets] = useState([
    { id: 4, name: "Rocky", type: "dog", age: "3" },
    { id: 5, name: "Porky", type: "pig", age: "1" },
    { id: 6, name: "Spirit", type: "horse", age: "5" },
  ]);

  // Create a function above our `return` statement called `addPet` which will randomly add a pet from our new pets array into our pets array
  const addPet = () => {
    const newPet = newPets[newPets.length - 1];
    //update the newPets array using `setNewPets`
    setNewPets(newPets.slice(0, newPets.length - 1));

    setPets([...pets, newPet]);
  };

  return (
    <div>
      <h1>Block 24 Demo</h1>
      {/* Add a check in our component that shows a message `No more pets to add`
      instead of the button if the `newPets` is empty */}
      {newPets.length === 0 ? (
        <p>No more pets to add</p>
      ) : (
        <button onClick={addPet}>Add a Pet</button>
      )}
      {/* Add a button in our component above our list of pets to add a new pet to
      our list */}
      {/* <button onClick={addPet}>Add a Pet</button> */}
      {/* create a `table` for our pets */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {/* map through the pets array and return a row that shows the pet's name,
          type and age */}
          {pets.map((pet) => {
            return (
              <tr key={pet.id}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>{pet.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;