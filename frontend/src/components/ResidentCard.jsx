import { useState } from "react";

export default function ResidentCard({ resident, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(resident.name);

  const toggleAdopted = () => {
    onUpdate(resident.id, { ...resident, adopted: !resident.adopted });
  };

  const handleSave = () => {
    onUpdate(resident.id, { ...resident, name: editName });
    setEditing(false);
  };

  return (
    <div className="resident-card">
      {editing ? (
        <input value={editName} onChange={(e) => setEditName(e.target.value)} />
      ) : (
        <h3 onClick={() => setEditing(true)}>{resident.name}</h3>
      )}
      <p>Type: {resident.type}</p>
      <p>Mood: {resident.mood}</p>
      <p>Status: {resident.adopted ? "Adopted" : "Available"}</p>
      <button onClick={toggleAdopted}>
        {resident.adopted ? "Mark Available" : "Adopt"}
      </button>
      {editing ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : null}
      <button onClick={() => onDelete(resident.id)}>Delete</button>
    </div>
  );
}
