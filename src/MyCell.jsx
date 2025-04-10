export default function MyCell(props) {
    const x = props.props;
    return (
        <td className="align-middle">
            <ul className="list-unstyled mb-0">
            {x.map((entry, index) => {
                if (entry.url) {
                return <li key={index}><a href={entry.url}>{entry.text}</a></li>;
                }
                return <li key={index}>{entry.text}</li>;
            })}
            </ul>
        </td>
    )
}
