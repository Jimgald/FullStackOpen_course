

const Course = ({ courseCu }) => {
  console.log(courseCu)
  return (
    <>
      <Header courseHeader={courseCu}/>
      <Content courseContent={courseCu}/>
    </>

  )

}
const Header = ({ courseHeader }) => {
 
  return (
    <>
    <h1>{courseHeader.name}</h1>
    </>

  )

}
const Content = ({ courseContent }) => {
  const parts = courseContent.parts
  return (
    <>
    {parts.map(p => (
      <Part key={p.id} coursePart={p} />
    ))}
    </>

  )

}
const Part = ({ coursePart }) => {
  return (
    <>
      <p>{coursePart.name} {coursePart.exercises}</p>
    </>
  )

}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course courseCu={course} />
}

export default App