import myArray from "./observations.js";
import MyCell from "./MyCell.jsx";
import sortObservations from "./sort.js";

function App() {

  const sortedObservations = sortObservations(myArray);

  const addUniqueId = (thing1) => {
    return thing1.map((item, index) => {
      return {
        ...item,
        id: `${index + 1}`,
      };
    });
  };

  const updatedObjects = addUniqueId(sortedObservations);

  function FirstCell(props) {

    const x = props.props;

    if (x.imgFileName) {
      return (<td>
        {x.id}
        <button type="button" className="btn btn-primary ms-3" onClick={() => handleOpenModal(img)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera2" viewBox="0 0 16 16">
            <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4" />
            <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0" />
          </svg>
        </button>
      </td>)
    }
    return <td>{x.id}</td>
  }
  const listItems = updatedObjects.map((obs, index) =>

    <tr key={index}>

      <FirstCell props={obs} />
      <MyCell props={obs.references} />
      <MyCell props={obs.observations} />
      <MyCell props={obs.recommendations} />
    </tr>
  );

  return (<>
    <table className="table table-striped">
      <thead>
        <tr>
          <td></td>
          <td><h4>Reference</h4></td>
          <td><h4>Observation</h4></td>
          <td><h4>Recommendation</h4></td>
        </tr>
      </thead>
      <tbody>
        {listItems}
      </tbody>
    </table>
  </>)
}

export default App;
