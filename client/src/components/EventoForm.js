import { useState } from "react";
import axios from "axios";

function EventoForm({ onSuccess, pessoas }) {
  const [name, setName] = useState("");
  const [participantes, setParticipantes] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function handleAddEvento(e) {
    e.preventDefault();
    setErro("");
    if (!name.trim() || !participantes || !data || !horario) {
      setErro("Todos os campos são obrigatórios.");
      return;
    }
    setLoading(true);
    try {
      // Monta string ISO 8601 com offset do timezone local
      // Exemplo: 2026-03-31T14:00:00-03:00
      const [hour, minute] = horario.split(":");
      const dateObj = new Date(data);
      dateObj.setHours(Number(hour), Number(minute), 0, 0);
      // Pega o offset do timezone local
      const tzOffset = -dateObj.getTimezoneOffset();
      const diff = tzOffset >= 0 ? "+" : "-";
      const pad = (n) => String(Math.floor(Math.abs(n))).padStart(2, "0");
      const offsetStr = `${diff}${pad(tzOffset / 60)}:${pad(tzOffset % 60)}`;
      const horarioISO = `${data}T${horario}:00${offsetStr}`;

      await axios.post("http://localhost:2999/evento", {
        name,
        participantes,
        data,
        horario: horarioISO,
      });
      setName("");
      setParticipantes("");
      setData("");
      setHorario("");
      if (onSuccess) onSuccess();
    } catch (err) {
      setErro(
        err?.response?.data || "Erro ao adicionar evento. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleAddEvento} style={{ marginTop: 20 }}>
      <input
        placeholder="Nome do evento"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
        style={{ padding: 8, width: 180, marginRight: 8 }}
      />
      <select
        value={participantes}
        onChange={(e) => setParticipantes(e.target.value)}
        disabled={loading}
        style={{ padding: 8, width: 140, marginRight: 8 }}
      >
        <option value="">Selecione a pessoa</option>
        {pessoas.map((p) => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        disabled={loading}
        style={{ padding: 8, marginRight: 8 }}
      />
      <input
        type="time"
        value={horario}
        onChange={(e) => setHorario(e.target.value)}
        disabled={loading}
        style={{ padding: 8, marginRight: 8 }}
      />
      <button type="submit" disabled={loading} style={{ padding: 8 }}>
        {loading ? "Adicionando..." : "Inserir Evento"}
      </button>
      {erro && <div style={{ color: "red", marginTop: 10 }}>{erro}</div>}
    </form>
  );
}

export default EventoForm;
