import myArray from "./observations.js"
import MyRow from "./MyRow.jsx";
function App() {

  // resources.links.forEach(link => {
  //   console.log(`${link.text}: ${link.url}`);
  // });

  // console.log(myArray);

  // myArray.forEach(thing => {
  //   console.log(thing.source);
  // });

  const listItems = myArray.map((obs, index) => <li key={index}>{obs.source}</li>);

  // console.log(listItems);

  return (<>
    <table>
      <thead>
        <tr>
          <td>hi</td>
          <td>Reference</td>
          <td>Observation</td>
          <td>Recommendation</td>
        </tr>
      </thead>
      <tbody>
        <MyRow />
      </tbody>
    </table>
    <div>{listItems}</div>
    </>)
}

export default App