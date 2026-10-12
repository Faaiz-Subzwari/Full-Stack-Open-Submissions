import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: "1" }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    var nameFound = false
    persons.forEach(element => {
      console.log('existing name: ', element.name.toLowerCase(), 'new name: ', newName)
      if (element.name.toLowerCase() === newName.toLowerCase()) {
        alert(`${newName} is already added to the phonebook.`)
        nameFound = true
      }
    });

    if (!nameFound) {
      const newPerson = {
        name: newName,
        id: String(persons.length + 1)
      }
      setPersons(persons.concat(newPerson))
    }
    setNewName('')

    // for (const name of persons) {
    //   if (name.name.toLowerCase() === newName.toLowerCase()) {
    //     alert(`${newName} is already added to the phonebook.`)
    //   } else {
    //     const newPerson = {
    //       name: newName,
    //       id: String(persons.length + 1)
    //     }
    //     setPersons(persons.concat(newPerson))
    //   }
    // }
    // setNewName('')
  }

  const onNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App