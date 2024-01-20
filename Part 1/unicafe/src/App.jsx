import {useState} from 'react'

const Header = ({header}) => (
  <h1>{header}</h1>
)

const Button = ({handleClicks, text}) => (
  <button onClick={handleClicks}>{text}</button>
)

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
  <div>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.total}</p>
    <p>average {props.avg}</p>
    <p>positive {props.pos} %</p>
  </div>
  )
}

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const avg = (good - bad) / total
  const pos = good / total * 100

  return (
    <div>
      <Header header="give feedback" />
      <Button handleClicks={() => setGood(good + 1)} text="good" />
      <Button handleClicks={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClicks={() => setBad(bad + 1)} text="bad" />
      <Header header="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} avg={avg} pos={pos} />
    </div>
  )
}

export default App