
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <>
      {props.parts.map(part => <Part part={part.name} exercises={part.exercises} />)}
    </>
  )
}

const Total = (props) => {
  const exercises = props.parts.map(part => part.exercises);
  return (
    <p>Total number of exercises {exercises.reduce((previousNum, currentNum) => {return previousNum + currentNum})}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}
export default App;
