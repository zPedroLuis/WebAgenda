import { useState } from "react";
import axios from "axios";

function PessoaEdit({ pessoa, onClose, onEdit }) {
  const [nome, setNome] = useState(pessoa.name);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function handleEditPessoa(e) {
    e.preventDefault();
    setErro("");
    if (!nome.trim()) {
      setErro("O nome é obrigatório.");
      return;
    }
    setLoading(true);
    try {
      await axios.put(`http://localhost:2999/pessoa/${pessoa.id}`, { name: nome });
      if (onEdit) onEdit();
      onClose();
    } catch (err) {
      setErro(
        err?.response?.data || "Erro ao editar pessoa. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleEditPessoa} style={{ display: "inline" }}>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        disabled={loading}
        style={{ padding: 4, width: 140, marginRight: 4 }}
      />
      <button type="submit" disabled={loading} style={{ padding: 4 }}>
        Salvar
      </button>
      <button type="button" onClick={onClose} style={{ padding: 4, marginLeft: 4 }}>
        Cancelar
      </button>
      {erro && <div style={{ color: "red", marginTop: 4 }}>{erro}</div>}
    </form>
  );
}

export default PessoaEdit;
