import './style.css'

function Lista(props) {
  return (
    <li>
      <p>{props.item.name}</p>
      <p>{props.item.data}</p>
    </li>
  );
}
export default Lista;
