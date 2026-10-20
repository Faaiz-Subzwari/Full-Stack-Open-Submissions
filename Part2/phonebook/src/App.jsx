import { useEffect, useState } from 'react'
import axios from 'axios'

const PersonForm = ({persons, setPersons, newName, setNewName, onNameChange, newNumber, setNewNumber, onNewNumber}) => {

    const addName = (event) => {
    event.preventDefault()
    var nameFound = false
    persons.forEach(element => {
      console.log('existing name: ', element.name.toLowerCase(), 'new name: ', newName)
      if (element.name.toLowerCase().trim() === newName.toLowerCase().trim()) {
        alert(`${newName} is already added to the phonebook.`)
        nameFound = true
      }
    });

    if (!nameFound) {
      const newPerson = {
        name: newName,
        id: String(persons.length + 1),
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={onNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={onNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({persons}) => {
  return(
    <ul>
        {persons.map(person =>
          <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: "1", number: "123-456-7890" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const onNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const onNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add a new person</h3>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} onNameChange={onNameChange} newNumber={newNumber} setNewNumber={setNewNumber} onNewNumber={onNewNumber}/>
      <h3>Numbers</h3>
      <Persons persons={persons}/>
    </div>
  )
}

export default App