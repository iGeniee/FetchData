import React, {useState,useEffect} from 'react'


function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/reviews')
    .then(res => res.json())
    .then (data => setData(data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div>
       <table>
        <thead>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
        </thead>
        <tbody>
          {data.map((d,i)=> (
            <tr key={i}>
              <td>{d.email}</td>
              <td>{d.subject}</td>
              <td>{d.message}</td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>
  )
}

export default App