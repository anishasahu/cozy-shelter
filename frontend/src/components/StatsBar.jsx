export default function StatsBar({ total, available, adopted }) {
    return (
      <div className="stats-bar">
        <span>Total: {total}</span>
        <span>Available: {available}</span>
        <span>Adopted: {adopted}</span>
      </div>
    );
  }
  