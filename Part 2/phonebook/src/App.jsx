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
      const newId = persons.length + 1;
      const newNameAdd = {
        name: newName,
        number: newNumber,
        id: newId.toString(),
      };
      personService.create(newNameAdd).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const getPerson = persons.find((person) => person.name === newName);
        const updatedPerson = { ...getPerson, number: newNumber };
        personService
          .update(getPerson.id, updatedPerson)
          .then((updatedPrs) =>
            setPersons(
              persons.map((per) =>
                per.name !== getPerson.name ? per : updatedPrs
              )
            )
          );
      }
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

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}`)) {
      personService.del(person.id).then(() => {
        setPersons(persons.filter((prs) => prs.id !== person.id));
        console.log(`Deleted successfully`);
      });
    }
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

      <Persons
        persons={persons}
        onDisplay={onHandleSearch}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
