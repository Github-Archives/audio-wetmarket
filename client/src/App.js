import React, { useState, useEffect } from 'react'

function App() {

const [backendData, setBackendData] = useState([{}])

useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
}, [])

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p> 
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p> // map each user to a p tag and display
        ))
      )}

    </div>
  )
}

export default App