import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: "1", number:"123-456-7890" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={onNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App