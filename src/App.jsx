import React, { useEffect } from 'react';
import obs from './weld_safety/observations';
import MyComponent from './MyComponent.jsx';

// This is the safety list compiled from welding school.

function App() {

  const sortedObs = obs.sort((a, b) => { // Sorting the observations alphabetically by type.
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;
    return 0;
  });

  const obsWithIds = sortedObs.map((item, index) => ({// Adds a counter to each observation.
    id: index + 1,
    ...item,
  }));

  return (<>
    <table className="w-full border-separate">
      <thead>
        <tr className="text-left">
          <th>Menu</th>
          <th>Reference</th>
          <th>Observation</th>
          <th>Recommendation</th>
        </tr>
      </thead>

      <tbody>
        {obsWithIds.map((obs) => (
          <tr key={obs.id} className={obs.id % 2 === 0 ? 'bg-black' : 'bg-gray-900'}>

            <td className="text-center">{obs.id}</td>

            <td dangerouslySetInnerHTML={{ __html: obs.reference }} />

            <MyComponent obs={obs.observation}/>

            <td  className="p-3" dangerouslySetInnerHTML={{ __html: obs.recommendation }} />
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}
export default App;