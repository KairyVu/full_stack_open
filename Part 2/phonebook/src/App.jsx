/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    let state = false;
    persons.forEach((person) => (state = state || person.name === newName));
    if (!state) {
      const newNameAdd = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      personService.create(newNameAdd).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
  };

  const onHandleSearch = (person) => {
    return person.name.toLowerCase().includes(newSearch.toLowerCase());
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearch} />
      <h3>Add a new</h3>

      <PersonForm
        submit={addName}
        name={newName}
        nameChange={handleNameChange}
        number={newNumber}
        numberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} onDisplay={onHandleSearch} />
    </div>
  );
};

export default App;
