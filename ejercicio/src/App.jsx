import { useState } from 'react'

const MostrarPersonas = ({ nombre, numero}) => {
  return (
    <div>
      <p>name:{nombre}</p>
      <p>number:{numero}</p>
   </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '00-6543210' 
    }
  ])
  const [newName, setNewName] = useState('')
  const handleNames = (e) => {
    setNewName(e.target.value)
  }
  const [newNumber, setNewNumber] = useState('')
  const handleNumbers = (e) => {
    setNewNumber(e.target.value)
  }
  const addName = (e) => {
    e.preventDefault()
    console.log("añadido", e.target)
    const namePerson = {
      name: newName, 
      number: newNumber
    }
    if (persons.some(p => p.name === newName)) {
      alert(`${newName} is already in the list`)
    }
    else {
      setPersons(persons.concat(namePerson))
      setNewName('')
      setNewNumber('')
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNames} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumbers} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p =>
        <MostrarPersonas key={p.name} nombre={p.name} numero={p.number} />
      )}

    </div>

  )
}

export default App