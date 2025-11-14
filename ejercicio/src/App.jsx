import { useState } from 'react'

const MostrarPersonas = ({ nombre }) => {
  return (
    <p>name:{nombre}</p>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const handleNames = (e) => {
    setNewName(e.target.value)
  }
  const addName = (e) => {
    e.preventDefault()
    console.log("añadido", e.target)
    const namePerson = {
      name: newName
    }
    if (persons.some(p => p.name === newName)) {
      alert(`${newName} is already in the list`)
    }
    else {
      setPersons(persons.concat(namePerson))
      setNewName('')
  }
    }
    

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNames} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p =>
        <MostrarPersonas key={p.name} nombre={p.name} />
      )}

    </div>

  )
}

export default App