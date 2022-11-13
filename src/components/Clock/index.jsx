import React from 'react'
export default function Clock() {
    const [date, setDate] = React.useState(new Date());
    function refreshClock() {
        setDate(new Date());
    }
    React.useEffect(() => {
        const timerID = setInterval(refreshClock, 1000);
        return () => clearInterval(timerID);
    },[]);

  return (
    <div><span style={{fontWeight: 'bold'}}>Time:</span> {date.toLocaleTimeString()}</div>
  )
}
