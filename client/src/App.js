

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PessoaForm from "./components/PessoaForm";
import PessoasList from "./components/PessoasList";


function App() {
  const [pessoas, setPessoas] = useState([]);

  async function getPessoas() {
    const response = await axios.get("http://localhost:2999/pessoa");
    setPessoas(response.data);
  }

  useEffect(() => {
    getPessoas();
  }, []);

  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>Pessoas</h1>
        </div>
        <PessoaForm onSuccess={getPessoas} />
        <PessoasList pessoas={pessoas} onEdit={getPessoas} />
      </header>
    </div>
  );
}

export default App;
