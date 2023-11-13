import React, {useEffect, useState} from "react";
import Header from "../Hedear/Header";
import Lista from "../Item/Lista";
import "./style.css";
import axios from 'axios';

function Home() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(null)
  const [data, setData] = useState(null)

  const url = 'https://lista-compras-api-production.up.railway.app/lista'

  useEffect(() => {
    getList()
  }, [])

  function getList() {
    setLoading(true)

    axios.get(url)
    .then(function (response) {
      console.log(response)
      setList(response.data.map(item => {
        const data = new Date(item.data).toLocaleString('pt-BR');
  
        return {
          ...item,
          data
        }
      }));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      setLoading(false)
    });
  }
  
  function createList() {
    axios.post(url, {nome: name, data, data})
    .then(response => {
      fecharModal()
      getList()
    })
  }

  function abrirModal() {
    setOpen(true);
  }

  function fecharModal() {
    setOpen(false);
  }

  return (
    <>
      <Header titulo="Listas" acaotext="Abrir Modal" acao={abrirModal} />

      {list.length === 0 && <h1>Não tem listas cadastradas</h1>}

      {
        loading ?
          <h1>Loading</h1>
          : <ul>
            {list.map((item) => {
              return <Lista key={item.id} item={item} />;
            })}
          </ul>
      }

      {open && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={fecharModal}>
              &times;
            </span>
            <form action="#">
              <div className="form-item">
                  <label>Nome</label>
                  <input type="text" onInput={(e) => setName(e.target.value)}/>
              </div>

              <div className="form-item">
                  <label>data</label>
                  <input type="date"  onInput={(e) => setData(e.target.value)}/>
              </div>

              <button onClick={() => createList()}>Salvar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
