import { useState } from "react"

const Button = ({ handleClick, text }) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

const StatisticLine = (props) => {
  console.log(props, 'statisticLine')
  
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad}) => {

  let all = good + neutral + bad
  let average = (good * 1 + bad * -1) / (good + neutral + bad)
  let positive = ((good / (good + neutral + bad)) * 100).toFixed(14) + " %"

  console.log(all, 'Statistics')

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
       </div>
    )
  }

    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good: " value={good} />
            <StatisticLine text="neutral: " value={neutral} />
            <StatisticLine text="bad: " value={bad} />
            <StatisticLine text="all: " value={all} />
            <StatisticLine text="average: " value={average} />
            <StatisticLine text="positive: " value={positive} />
          </tbody>
        </table>
      </div>
      )
  }

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad} />
    </div>
  )
}

export default App