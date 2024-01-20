import {useState} from 'react'

const Header = ({header}) => (
  <h1>{header}</h1>
)

const Button = ({handleClicks, text}) => (
  <button onClick={handleClicks}>{text}</button>
)
const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header="give feedback" />
      <Button handleClicks={() => setGood(good + 1)} text="good" />
      <Button handleClicks={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClicks={() => setBad(bad + 1)} text="bad" />
      <Header header="statistics" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

    </div>
  )
}

export default App