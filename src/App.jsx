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

  function FirstCell(props){
    const x = props.props;
    if(x.imgFileName){
      return <td>{ x.id } image here</td>
    }
    return <td>{ x.id }</td>
  }
  const listItems = updatedObjects.map((obs, index) =>
    
    <tr key={index}>

      <FirstCell props={obs} />
      <MyCell props={obs.references}/>
      <MyCell props={obs.observations}/>
      <MyCell props={obs.recommendations}/>
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
