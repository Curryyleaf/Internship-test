// Hero.jsx

import React, { useState } from "react";
import productsData from "./Data"; 

const Hero = () => {
  const [products] = useState(productsData); // Using the product data from Data.jsx
  const [selectedItems, setSelectedItems] = useState([]);
  const [packages, setPackages] = useState([]);

  const handleItemToggle = (itemId) => {
    const selectedIndex = selectedItems.indexOf(itemId);
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems.splice(selectedIndex, 1);
      setSelectedItems(updatedSelectedItems);
    }
  };

  const handlePlaceOrder = () => {
    // Perform package optimization here
    const maxWeight = 1000;
    const courierPriceChart = { 200: 5, 500: 10, 1000: 15 };

    let currentWeight = 0;
    let currentPrice = 0;
    let currentPackage = [];
    let optimizedPackages = [];

    products.forEach((product) => {
      if (
        selectedItems.includes(product.id) &&
        currentWeight + product.weight <= maxWeight &&
        currentPrice + product.price <= 250
      ) {
        currentWeight += product.weight;
        currentPrice += product.price;
        currentPackage.push(product.name);
      } else if (currentPackage.length > 0) {
        optimizedPackages.push({
          items: currentPackage.join(", "),
          totalWeight: currentWeight,
          totalPrice: currentPrice,
          courierPrice: calculateShippingCost(currentWeight, courierPriceChart),
        });
        currentWeight = product.weight;
        currentPrice = product.price;
        currentPackage = [product.name];
      }
    });

    if (currentPackage.length > 0) {
      optimizedPackages.push({
        items: currentPackage.join(", "),
        totalWeight: currentWeight,
        totalPrice: currentPrice,
        courierPrice: calculateShippingCost(currentWeight, courierPriceChart),
      });
    }

    setPackages(optimizedPackages);
  };

  const calculateShippingCost = (weight, courierPriceChart) => {
    for (const range of Object.keys(courierPriceChart).sort((a, b) => a - b)) {
      if (weight <= range) {
        return courierPriceChart[range];
      }
    }
    return 0; // Return 0 if weight exceeds the highest range
  };
  return (
    <div className="min-h-screen bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-4 text-center">Product List</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg text-black"
            >
              <p className="font-bold mb-4">Name: {product.name}</p>
              <p className="font-bold mb-4">Price: ${product.price}</p>
              <p className="font-bold mb-4">Weight: {product.weight}g</p>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(product.id)}
                  onChange={() => handleItemToggle(product.id)}
                  className="mr-2"
                />
                Select
              </label>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handlePlaceOrder}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Place Order
          </button>
        </div>

        {packages.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl mb-4 text-center">Order Packages</h2>
            {packages.map((pkg, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded mb-8">
                <h3 className="text-xl mb-2">Package {index + 1}</h3>
                <p className="font-bold mb-2">Items: {pkg.items}</p>
                <p className="font-bold mb-2">
                  Total weight: {pkg.totalWeight}g
                </p>
                <p className="font-bold mb-2">Total price: ${pkg.totalPrice}</p>
                <p className="font-bold">Courier price: ${pkg.courierPrice}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
