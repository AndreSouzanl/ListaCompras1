import './style.css'
function Header(props) {
  return (
    <div className='header'>
      <h1>{props.titulo}</h1>
      <button onClick={() => props.acao()}>{props.acaotext}</button>
    </div>
  );
}

export default Header;
