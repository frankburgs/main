import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      const listItems = people.map(person =>
        <li>{person}</li>
      );

      return <ul>{listItems}</ul>;

    </>
  )
}

export default App
