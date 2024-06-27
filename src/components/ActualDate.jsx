import { useEffect, useState } from "react"

export default function Actualdate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalTime = setInterval(() => setTime(new Date()), 1000)

    return () => {
      clearInterval(intervalTime);
    }
  }, [])

  return(
    <span>{time.toLocaleTimeString()}</span>
  )
}