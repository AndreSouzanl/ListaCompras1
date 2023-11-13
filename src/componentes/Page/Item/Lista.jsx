import './style.css'

function Lista(props) {
  return (
    <li>
      <p>{props.item.nome}</p>
      <p>{props.item.data}</p>
    </li>
  );
}
export default Lista;
