import React from 'react';
import '../Styles/MedicinePrescription.css'; // Update the path to your CSS file
import PrescriptionForm from './PrescriptionForm';
import avion from '../Assets/avion.png'; // Replace with actual image paths

export default function MedicinePrescription(props) {
  const medicines = [
    {
      id: 1,
      name: 'Medicine A',
      image: avion, // Replace with actual medicine images
      prescriptionRequired: true,
      dosage: 'Take 1 tablet daily',
      price: '10.00Rs',
      inStock: true,
      rating: 4.8, // Example: Medicine's rating
    },
    {
      id: 2,
      name: 'Medicine B',
      image: avion, // Replace with actual medicine images
      prescriptionRequired: true,
      dosage: 'Take 1 tablet daily',
      price: '10.00Rs',
      inStock: true,
      rating: 4.8, // Example: Medicine's rating
    },
    {
      id: 3,
      name: 'Medicine C',
      image: avion, // Replace with actual medicine images
      prescriptionRequired: true,
      dosage: 'Take 1 tablet daily',
      price: '10.00 Rs',
      inStock: true,
      rating: 4.8, // Example: Medicine's rating
    },
    {
      id: 4,
      name: 'Medicine D',
      image: avion, // Replace with actual medicine images
      prescriptionRequired: true,
      dosage: 'Take 1 tablet daily',
      price: '10.00Rs',
      inStock: true,
      rating: 4.8, // Example: Medicine's rating
    },
    {
      id: 5,
      name: 'Medicine E',
      image: avion, // Replace with actual medicine images
      prescriptionRequired: true,
      dosage: 'Take 1 tablet daily',
      price: '10.00Rs',
      inStock: true,
      rating: 4.8, // Example: Medicine's rating
    },
    {
      id: 6,
      name: 'Medicine F',
      image: avion, // Replace with actual medicine images
      prescriptionRequired: true,
      dosage: 'Take 1 tablet daily',
      price: '10.00Rs',
      inStock: true,
      rating: 4.8, // Example: Medicine's rating
    },
    // Add more medicine objects...
  ];

  return (
    <div className="medicine-prescription-bg">
      <div className="container">
        <h2 className="prescription-header">Medicine Prescription</h2>
        <div className="row">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="col-md-6"> {/* Use col-md-6 to center the card */}
              <div className="medicine-card">
                <img src={medicine.image} alt={medicine.name} className="medicine-image" />
                <div className="medicine-details">
                  <h5 className="medicine-name">{medicine.name}</h5>
                  <p className="medicine-rating">Rating: {medicine.rating}</p>
                  <p className="medicine-description">
                    <strong>Dosage:</strong> {medicine.dosage}
                    <br />
                    <strong>Price:</strong> {medicine.price}
                    <br />
                    <strong>Prescription Required:</strong> {medicine.prescriptionRequired ? 'Yes' : 'No'}
                    <br />
                    <strong>In Stock:</strong> {medicine.inStock ? 'Yes' : 'No'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <PrescriptionForm />
      </div>
    </div>
  );
}
