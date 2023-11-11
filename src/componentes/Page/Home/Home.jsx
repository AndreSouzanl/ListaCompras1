import React from "react";
import Header from "../Hedear/Header";
import Lista from "../Item/Lista";
import "./style.css";

const listaItens = [
  { id: "1", name: "camisa", data: "15/11/2023" },
  { id: "2", name: "calça", data: "11/11/2023" },
];

function Home() {
  const [open, setOpen] = React.useState(false);

  function abrirModal() {
    setOpen(true);
  }
  function fecharModal() {
    setOpen(false);
  }

  return (
    <>
      <Header titulo="Listas" acaotext="Abrir Modal" acao={abrirModal} />

      <ul>
        {listaItens.map((item) => {
          return <Lista item={item} />;
        })}
      </ul>

      {open && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={fecharModal}>
              &times;
            </span>
            <form action="#">
              <div className="form-item">
                  <label>Nome</label>
                  <input type="text" />
              </div>

              <div className="form-item">
                  <label>data</label>
                  <input type="date" />
              </div>

              <button>Salvar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
