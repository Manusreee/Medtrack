import { useEffect, useState } from "react";
import "./App.css";

const API = "http://127.0.0.1:8000";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");

  const loadMedicines = async () => {
    const res = await fetch(`${API}/medicines`);
    const data = await res.json();
    setMedicines(data);
  };

  const addMedicine = async () => {
    if (!name || !dose) return;

    await fetch(`${API}/medicines`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, dose })
    });

    setName("");
    setDose("");
    loadMedicines();
  };

  const deleteMedicine = async (medicineName) => {
    await fetch(`${API}/medicines/${medicineName}`, {
      method: "DELETE"
    });

    loadMedicines();
  };

  useEffect(() => {
    loadMedicines();
  }, []);

  return (
    <div className="container">
      <h1>💊 MediTrack</h1>
      <p>Simple Medicine Management System</p>

      <div className="form">
        <input
          placeholder="Medicine name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Dosage"
          value={dose}
          onChange={(e) => setDose(e.target.value)}
        />

        <button onClick={addMedicine}>Add Medicine</button>
      </div>

      <h2>My Medicines</h2>

      {medicines.map((medicine, index) => (
        <div className="medicine" key={index}>
          <span>
            💊 <b>{medicine.name}</b> — {medicine.dose}
          </span>

          <button onClick={() => deleteMedicine(medicine.name)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;