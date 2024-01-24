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
    return (
        <>
            <Header header="Web development curriculum" />
            {courses.map((course, i) => (
                <div key={i}>
                <Title title={course.name} />
                <Content parts={course.parts} />
                <Total parts={course.parts} />
                </div>
            ))}
        </>
    ) 
  }
  
  export default Course