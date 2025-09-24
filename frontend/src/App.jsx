import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import IntakeForm from "./components/IntakeForm";

function App() {
  const [residents, setResidents] = useState([]);

  const addResident = (newRes) => {
    // prevent duplicate
    if (residents.some(r => r.name.toLowerCase() === newRes.name.toLowerCase())) {
      alert("Sock with that name already exists!");
      return;
    }
    setResidents([...residents, newRes]);
  };

  const adoptResident = (name) => {
    setResidents(residents.map(r =>
      r.name === name ? { ...r, adopted: true } : r
    ));
  };

  const availableCount = residents.filter(r => !r.adopted).length;
  const adoptedCount = residents.filter(r => r.adopted).length;

  return (
    <div className="container">
      <Header />
      <StatsBar
        total={residents.length}
        available={availableCount}
        adopted={adoptedCount}
      />
      <IntakeForm onAdd={addResident} />
      {residents.length === 0 ? (
        <p className="empty">No socks yet 😢</p>
      ) : (
        <table className="sock-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Pattern</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((res) => (
              <tr key={res.name}>
                <td>{res.name}</td>
                <td>{res.type}</td>
                <td>
                  <span className={`badge ${res.adopted ? "adopted" : "available"}`}>
                    {res.adopted ? "Adopted" : "Available"}
                  </span>
                </td>
                <td>
                  {!res.adopted && (
                    <button onClick={() => adoptResident(res.name)}>Adopt</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
