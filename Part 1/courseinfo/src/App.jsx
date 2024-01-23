const Header = ({course}) => (
  <h1>{course}</h1>
)


const Content = ({parts}) => {
  const a = parts.map((part, i) => 
    <Part name={part.name} exercises={part.exercises} key={i} />
  )
  return (
    <>{a}</>
  )
}


const Total = ({parts}) => {
  let sum = 0
  parts.forEach(part => {
    sum += part.exercises
  })
  return (
    <>
      <b>total of {sum} exercises</b>
    </>
  )
}

const Part = ({name, exercises}) => (
  <p>{name} {exercises} </p>
)

const Course = ({course}) => (
  <>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts} />
  </>
)


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
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App