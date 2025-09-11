// src/components/HotelCard.jsx
import React from "react";

export default function HotelCard({ hotel }) {
    return (
        <div className="border rounded-xl shadow p-4">
            <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.address}</p>
            <p className="text-sm mt-2">{hotel.description}</p>
        </div>
    );
}
