import { useEffect, useState } from 'react'
import numbersService from './services/numbers'
import PersonForm from './components/personForm'
import Persons from './components/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: "1", number: "123-456-7890" }
  ])
  const [newPerson, setNewPerson] = useState({ name: "", number: "" })

  useEffect(() => {
    numbersService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.clear()
    // console.log(event.target.value)
    // console.log(newPerson)

    const result = persons.find(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase().trim()
    );

    if (!result) {
      numbersService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    } else {
      alert(`${newPerson.name} already exists!`)
    }
    setNewPerson({ name: "", number: "" })
  }

  const handleChange = ({ target: { name, value } }) => {
    setNewPerson((newPerson) => ({
      ...newPerson,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add a new person</h3>
      <PersonForm handleSubmit={handleSubmit} newPerson={newPerson} handleChange={handleChange} />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  )
}

export default App