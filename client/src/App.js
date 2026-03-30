

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import PessoaForm from "./components/PessoaForm";
import PessoasList from "./components/PessoasList";
import EventoForm from "./components/EventoForm";
import EventosList from "./components/EventosList";


function App() {
  const [pessoas, setPessoas] = useState([]);
  const [atualizarEventos, setAtualizarEventos] = useState(0);

  async function getPessoas() {
    const response = await axios.get("http://localhost:2999/pessoa");
    setPessoas(response.data);
  }

  useEffect(() => {
    getPessoas();
  }, []);

  function handleEventoInserido() {
    setAtualizarEventos((v) => v + 1);
  }

  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>Pessoas</h1>
        </div>
        <PessoaForm onSuccess={getPessoas} />
        <PessoasList pessoas={pessoas} onEdit={getPessoas} />
        <hr style={{ margin: '32px 0' }} />
        <h1>Eventos</h1>
        <EventoForm onSuccess={handleEventoInserido} pessoas={pessoas} />
        <EventosList atualizarTrigger={atualizarEventos} />
      </header>
    </div>
  );
}

export default App;
