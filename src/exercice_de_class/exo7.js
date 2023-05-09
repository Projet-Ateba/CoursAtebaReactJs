import React, { useState } from 'react';


  
const ProduitList = ({ produits }) => {
  const [selectedProduit, setSelectedProduit] = useState(null);
  

  const handleProduitClick = (produit) => {
    if (selectedProduit === produit) {
      setSelectedProduit(null);
    } else {
      setSelectedProduit(produit);
    }
  };

  return (
    <div>
      {produits.map((produit) => (
        <div key={produit.id} onClick={() => handleProduitClick(produit)} style={{ cursor: 'pointer' }}>
          <h2>{produit.title}</h2>
          {selectedProduit === produit && (
            <div>
              <img src={produit.image} alt={produit.title} />
              <p>{produit.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProduitList;
