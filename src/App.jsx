import { useState } from 'react'
import obs from './weld_safety/observations'

function App() {
  
  const obsWithIds = obs.map((item, index) => ({// Adds a counter to each observation.
    id: index + 1,
    ...item,
  }));

  return (

    <table className="border-collapse border border-gray-400 w-full">
      <thead>
        <tr>
          <th>Menu</th>
          <th>Type</th>
          <th>Observation</th>
          <th>Recommendation</th>
        </tr>
      </thead>
      
      <tbody>
        {obsWithIds.map((obs) => (
          <tr key={obs.id}>
            <td className="border border-gray-300">{obs.id}</td>
            <td className="border border-gray-300">{obs.type}</td>
            <td className="border border-gray-300 p-3" dangerouslySetInnerHTML={{ __html: obs.observation }} />
            <td className="border border-gray-300" dangerouslySetInnerHTML={{ __html: obs.recommendation }} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default App;