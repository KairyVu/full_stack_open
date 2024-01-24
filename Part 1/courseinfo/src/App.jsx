const Header = ({header}) => (
  <h1>{header}</h1>
)

const Title = ({title}) => (
  <h2>{title}</h2>
)

const Content = ({parts}) => {
  const a = parts.map((part) => 
    <Part name={part.name} exercises={part.exercises} key={part.id} />
  )
  return (
    <>{a}</>
  )
}

const Total = ({parts}) => (
  <b>total of {parts.reduce((sum, cur) => sum + cur.exercises, 0)} exercises</b>
)

const Part = ({name, exercises}) => (
  <p>{name} {exercises} </p>
)

const Course = ({courses}) => {
  return courses.map((course, i, j) => (
    <div key={i}>
      <Title title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  ))
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
      <Header header="Web development curriculum" />
      <Course courses={courses} />
    </div>
  )
}

export default App