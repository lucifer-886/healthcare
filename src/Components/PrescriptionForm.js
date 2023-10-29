import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function PrescriptionForm() {
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., sending data to a server
    console.log('Selected Medicine:', selectedMedicine);
    console.log('Quantity:', quantity);
  };

  return (
    <div className="prescription-form">
      <h2>Prescription Form</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="medicineSelect">Select Medicine</label>
          <select
            id="medicineSelect"
            className="form-control"
            value={selectedMedicine}
            onChange={(e) => setSelectedMedicine(e.target.value)}
            required
          >
            <option value="">Select a medicine</option>
            <option value="Medicine A">Medicine A</option>
            <option value="Medicine B">Medicine B</option>
            <option value="Medicine C">Medicine C</option>
            <option value="Medicine D">Medicine D</option>
            <option value="Medicine E">Medicine E</option>
            <option value="Medicine F">Medicine F</option>
            {/* Add more medicine options here */}
          </select>
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="quantityInput">Quantity</label>
          <input
            type="number"
            id="quantityInput"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </div>
        <br></br>
        <Link to="/live"> {/* Link to the /checkout route */}
        <button type="submit" className="btn btn-primary">
          Buy Medicine
        </button>
      </Link>
      </form>
    </div>
  );
}
