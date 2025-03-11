import React, { useEffect } from 'react';
import obs from './weld_safety/observations';
import MyComponent from './MyComponent.jsx';
import { CameraIcon } from './svg.jsx';
import { FullScreenIcon } from './svg.jsx';

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

          <tr key={ obs.id } className={obs.id % 2 === 0 ? 'bg-black' : 'bg-gray-900'}>
            
            <td className="text-center flex p-5">
              <span>{ obs.id }&nbsp;</span>
              {obs.id < 10 && <span>&nbsp;</span>}
              {obs.media && <CameraIcon/>}
            </td>

            <td className="p-2" dangerouslySetInnerHTML={{ __html: obs.reference }} />

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