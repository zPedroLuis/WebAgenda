import { useState } from "react";
import axios from "axios";

function PessoaForm({ onSuccess }) {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

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
      if (onSuccess) onSuccess();
    } catch (err) {
      setErro(
        err?.response?.data || "Erro ao adicionar pessoa. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
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
      {erro && <div style={{ color: "red", marginTop: 10 }}>{erro}</div>}
    </form>
  );
}

export default PessoaForm;
