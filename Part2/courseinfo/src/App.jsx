import {Fragment} from 'react'

const Header = ({ header }) => {
  // console.log(header)
  return (
    <div>
      <h2>{header}</h2>
    </div>
  )
}

const Part = ({ part }) => {
  // console.log("part componenet", part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  console.log("content componenet", parts)
  return (
    <>
      {parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
    </>
  )
}

const Total = ({ parts }) => {
  var total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)
  return (
    <h3>total of {total} exercises</h3>
  )
}

const Course = ({ courses }) => {
  // console.log(courses)
  // console.log(courses[0].parts)
  return (
    <div>
      {courses.map((course) => (
        <Fragment key={course.id}>
          <Header header={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </Fragment>
      ))}

      {/* <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div >
  )
}

export default App