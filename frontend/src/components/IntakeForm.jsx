import { useState } from "react";

export default function IntakeForm({ onAdd }) {
  const [name, setName] = useState("");
  const [pattern, setPattern] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !pattern) return;

    onAdd({ name, type: pattern, adopted: false });
    setName("");
    setPattern("");
  };

  return (
    <form onSubmit={handleSubmit} className="intake-form">
      <input
        placeholder="Sock name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Sock color/pattern"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
      />
      <button type="submit" disabled={!name || !pattern}>Add</button>
    </form>
  );
}
