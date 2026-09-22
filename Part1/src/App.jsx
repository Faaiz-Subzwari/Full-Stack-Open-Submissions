import { useState } from "react"

const Statistics = ({ good, neutral, bad, total }) => {
  if(total == 0){
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {(good * 1 + bad * -1) / total}</p>
      <p>positive {(good / total) * 100}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setTotal(total + 1)
  }

  const handlebad = () => {
    const newBad = bad + 1
    setBad(newBad)
    setTotal(total + 1)
  }

  return (
    <div>

      <h1>give feedback</h1>
      <button onClick={handleGood}>
        good 
      </button>
      <button onClick={handleNeutral}>
        neutral 
      </button>
      <button onClick={handlebad}>
        bad 
      </button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App