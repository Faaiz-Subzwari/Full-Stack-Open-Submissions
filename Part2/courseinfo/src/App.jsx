const Header = ({header}) => {
  console.log(header)
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}

const Part = ({part}) => {
  console.log("part componenet", part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  console.log("content componenet",parts)
  return (
    <>
      {parts.map((part) => (
        <Part part={part} key={part.id}/>
      ))}
    </>
  )
}

const Course = ({ course }) => {
  // console.log(course.name)
  return(
    <div>
      <Header header={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
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

  return (
    <div>
      <Course course={course}/>
      {/* <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
    </div >
  )
}

export default App