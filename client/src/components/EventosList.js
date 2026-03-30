import { useEffect, useState } from "react";
import axios from "axios";


function formatarDataHora(dataISO, horarioISO) {
  // Usa horarioISO se disponível, senão dataISO
  const iso = horarioISO || dataISO;
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
}

function EventosList({ atualizarTrigger }) {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  async function getEventos() {
    setLoading(true);
    setErro("");
    try {
      const response = await axios.get("http://localhost:2999/evento");
      setEventos(response.data);
    } catch (err) {
      setErro("Erro ao buscar eventos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getEventos();
  }, [atualizarTrigger]);

  if (loading) return <div>Carregando eventos...</div>;
  if (erro) return <div style={{ color: "red" }}>{erro}</div>;

  return (
    <div className="todos" style={{ marginTop: 24 }}>
      <h2>Eventos</h2>
      {eventos.length === 0 ? (
        <div>Nenhum evento cadastrado.</div>
      ) : (
        eventos.map((evento) => (
          <div className="todo" key={evento.id}>
            <p>
              <strong>{evento.name}</strong> — {formatarDataHora(evento.data, evento.horario)} <br />
              Participante: {evento.pessoa?.name || evento.participantes}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default EventosList;
