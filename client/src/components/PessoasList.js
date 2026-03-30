
import { useState } from "react";
import axios from "axios";
import PessoaEdit from "./PessoaEdit";

function PessoasList({ pessoas, onEdit }) {
  const [editId, setEditId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [erro, setErro] = useState("");

  async function handleDelete(id) {
    if (!window.confirm("Tem certeza que deseja excluir esta pessoa?")) return;
    setDeletingId(id);
    setErro("");
    try {
      await axios.delete(`http://localhost:2999/pessoa/${id}`);
      if (onEdit) onEdit();
    } catch (err) {
      const msg = err?.response?.data;
      if (typeof msg === "string" && msg.includes("vinculada a eventos")) {
        setErro("Não é possível excluir uma pessoa vinculada a eventos. Exclua os eventos primeiro.");
      } else {
        setErro(msg || "Erro ao excluir pessoa. Tente novamente.");
      }
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="todos">
      {pessoas.map((pessoa) => (
        <div className="todo" key={pessoa.id}>
          {editId === pessoa.id ? (
            <PessoaEdit pessoa={pessoa} onClose={() => setEditId(null)} onEdit={onEdit} />
          ) : (
            <>
              <p>{pessoa.name}</p>
              <button onClick={() => setEditId(pessoa.id)} style={{ marginLeft: 8 }}>
                Editar
              </button>
              <button
                onClick={() => handleDelete(pessoa.id)}
                style={{ marginLeft: 8 }}
                disabled={deletingId === pessoa.id}
              >
                {deletingId === pessoa.id ? "Excluindo..." : "Excluir"}
              </button>
            </>
          )}
        </div>
      ))}
      {erro && <div style={{ color: "red", marginTop: 10 }}>{erro}</div>}
    </div>
  );
}

export default PessoasList;
