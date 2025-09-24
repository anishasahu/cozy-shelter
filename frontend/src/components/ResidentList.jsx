import ResidentCard from "./ResidentCard";

export default function ResidentList({ residents, onUpdate, onDelete }) {
  if (residents.length === 0) {
    return <p>No socks yet 😢</p>;
  }
  return (
    <div className="resident-list">
      {residents.map(resident => (
        <ResidentCard
          key={resident.id}
          resident={resident}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
