import {useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: "040-123456", id: 1}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((props) => (
          <div key={props.id}>{props.name} {props.number}</div>
        ))}
      </div>
    </div>
  )
}

export default App