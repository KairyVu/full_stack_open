import {useState} from 'react'

const Header = ({header}) => (
  <h1>{header}</h1>
)

const Button = ({handleClicks, text}) => (
  <button onClick={handleClicks}>{text}</button>
)

const StatisticLine = ({stat, text}) => (
  <p>{text} {stat}</p>
)

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
  <div>
    <StatisticLine stat={props.good} text="good" />
    <StatisticLine stat={props.neutral} text="neutral" />
    <StatisticLine stat={props.bad} text="bad" />
    <StatisticLine stat={props.total} text="all" />
    <StatisticLine stat={props.avg} text="average" />
    <StatisticLine stat={props.pos} text="positive" />
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