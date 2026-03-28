
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function PessoasList({ pessoas }) {
  return (
    <div className="todos">
      {pessoas.map((pessoa) => (
        <div className="todo" key={pessoa.id}>
          <p>{pessoa.name}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function getPessoas() {
    const response = await axios.get("http://localhost:2999/pessoa");
    setPessoas(response.data);
  }

  useEffect(() => {
    getPessoas();
  }, []);

  async function handleAddPessoa(e) {
    e.preventDefault();
    setErro("");
    if (!nome.trim()) {
      setErro("O nome é obrigatório.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:2999/pessoa", { name: nome });
      setNome("");
      await getPessoas();
    } catch (err) {
      setErro(
        err?.response?.data || "Erro ao adicionar pessoa. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>Pessoas</h1>
        </div>
        <PessoasList pessoas={pessoas} />
        <form onSubmit={handleAddPessoa} style={{ marginTop: 20 }}>
          <input
            className="inputName"
            placeholder="Nome da pessoa"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            disabled={loading}
            style={{ padding: 8, width: 200, marginRight: 8 }}
          />
          <button
            className="newTaskButton"
            type="submit"
            disabled={loading}
            style={{ padding: 8 }}
          >
            {loading ? "Adicionando..." : "Inserir Pessoa"}
          </button>
        </form>
        {erro && <div style={{ color: "red", marginTop: 10 }}>{erro}</div>}
      </header>
    </div>
  );
}

export default App;
