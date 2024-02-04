import {useState} from 'react'

const Filter = ({val, onChange}) => (
  <div>
    filter shown with <input value={val} onChange={onChange} />
  </div>
)

const PersonForm = (props) => (
  <form onSubmit={props.submit}>
    <div>name: <input value={props.name} onChange={props.nameChange}/></div>
    <div>number: <input value={props.number} onChange={props.numberChange}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Persons = ({persons, onDisplay}) => (
  <>
  {persons.filter((person) => (onDisplay(person))).map((person) =>
    <div key={person.id}>{person.name} {person.number}</div>
  )}
  </>
)


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addName = (event) => {
    event.preventDefault()
    let state = false
    persons.forEach((person) =>
      state = (state || person.name === newName)
    )
    if (!state) {
      const newNameAdd = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newNameAdd))
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }

  const onHandleSearch = (person) => {
    return person.name.toLowerCase().includes(newSearch.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearch} />
      <h3>Add a new</h3>
      
      <PersonForm submit={addName} name={newName} nameChange={handleNameChange} number={newNumber} numberChange={handleNumberChange} />

      <h3>Numbers</h3>
      
      <Persons persons={persons} onDisplay={onHandleSearch} />
    </div>
  )
}

export default App