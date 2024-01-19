const Header = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  )
}

const Total = ({parts}) => {
  let sum = 0
  parts.forEach(part => {
    sum += part.exercises
  })
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <>
      <p>{name} {exercises}</p>
    </>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App