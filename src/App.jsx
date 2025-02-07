import { useState } from 'react'
import obs from './weld_safety/observations'

function App() {
  
  const obsWithIds = obs.map((item, index) => ({
    id: index + 1,
    ...item,
  }));
  

  return (

    <table className="bg-black text-white">
      <thead></thead>
      
      <tbody>
      {obsWithIds.map((obs) => (
          <tr key={obs.id}>
            <td>{obs.id}</td>
            <td>{obs.type}</td>
            <td dangerouslySetInnerHTML={{ __html: obs.observation }} />
            <td dangerouslySetInnerHTML={{ __html: obs.recommendation }} />
          </tr>
      ))}
      </tbody>
    </table>
  )
}
export default App
