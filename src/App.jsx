import myArray from "./observations.js"
import MyCell from "./MyCell.jsx"

function App() {

  // Creates a list item.
  const listItems = myArray.map((obs, index) =>
    <tr key={index}>
      <td className="text-info">
        { obs.authorityType }
        { obs.imgFileName }
      </td>

      <td>
        <ul className="list-unstyled">
          {obs.references.map((aReference, index) => {

            if (aReference.referenceURL) {
              return "hello";
            }
            return <li>{aReference.referenceText}</li>;

          })}
        </ul>
      </td>

      <td>
        <ul className="list-unstyled">
          {obs.observations.map((anObservation, index) =>
            <li>{anObservation.observationText}</li>
          )}
        </ul>
      </td>
      
      <MyCell />
    </tr>
  );

  return (<>
    <table className="table table-striped">
      <thead>
        <tr>
          <td><h2>hi</h2></td>
          <td>Reference</td>
          <td>Observation</td>
          <td>Recommendation</td>
        </tr>
      </thead>
      <tbody>
        {listItems}
      </tbody>
    </table>
  </>)
}

export default App