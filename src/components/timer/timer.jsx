import React, { useEffect, useState } from 'react'
import './timer.css'

const timer = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const deadLine = 'Dec, 10,2023'

  const getTime = () => {
    const time = Date.parse(deadLine) - Date.now()
    
    setDays(convertPadStart(Math.floor(time / (1000 * 60 * 60 * 24))))
    setHours(convertPadStart(Math.floor((time / (1000 * 60 * 60)) % 24)))
    setMinutes(convertPadStart(Math.floor((time / 1000 / 60) % 60)))
    setSeconds(convertPadStart(Math.floor((time / 1000) % 60)))
  }

  const convertPadStart = n => (n > 9 ? '' + n : '0' + n)

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <div className="containerrr">
        <div className="time">
          <span className="counter">
            {days}:{hours}:{minutes}:{seconds}
          </span>
        </div>
        <div className="d timer">Days</div>
        <div className="h timer">Hours</div>
        <div className="m timer">Minutes</div>
        <div className="s timer">Seconds</div>
      </div>
    </div>
  )
}

export default timer
