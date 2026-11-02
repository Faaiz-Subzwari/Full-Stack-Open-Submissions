const PersonForm = ({ handleSubmit, handleChange, newPerson }) => {

//   const addName = (event) => {
//     event.preventDefault()
//     var nameFound = false
//     persons.forEach(element => {
//       // console.log('existing name: ', element.name.toLowerCase(), 'new name: ', newName)
//       if (element.name.toLowerCase().trim() === newName.toLowerCase().trim()) {
//         alert(`${newName} is already added to the phonebook.`)
//         nameFound = true
//       }
//     });

//     if (!nameFound) {
//       const newPerson = {
//         name: newName,
//         id: String(persons.length + 1),
//         number: newNumber
//       }
//       // setPersons(persons.concat(newPerson))
//       numbersService
//         .create(newPerson)
//         .then(response => {
//           setPersons(persons.concat(response.data))
//           setNewName('')
//           setNewNumber('')
//         })
//     }
//     // setNewName('')
//     // setNewNumber('')
//   }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newPerson.name} name="name" onChange={handleChange} />
      </div>
      <div>
        number: <input value={newPerson.number} name ="number" onChange={handleChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm