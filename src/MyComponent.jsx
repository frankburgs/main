export default function MyComponent({obs}) {
    return (<>
      <td 
        dangerouslySetInnerHTML={{__html: obs}}
      />
    </>)
  }