import { useState } from "react";
import PessoaEdit from "./PessoaEdit";

function PessoasList({ pessoas, onEdit }) {
  const [editId, setEditId] = useState(null);

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
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default PessoasList;
