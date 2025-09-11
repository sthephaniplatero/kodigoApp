import React, { useEffect, useState } from "react";
import { getAcomodaciones } from "../api/rm";

export default function Hoteles() {
    const [acomodaciones, setAcomodaciones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAcomodaciones();
                setAcomodaciones(data);
            } catch (err) {
                console.error("Error cargando acomodaciones:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p className="text-center mt-10">Cargando hoteles...</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Hoteles disponibles</h1>

            {acomodaciones.length === 0 ? (
                <p className="text-center text-gray-500">No hay hoteles disponibles.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {acomodaciones.map((hotel) => (
                        <div
                            key={hotel.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                        >
                            <img
                                src={hotel.image}
                                alt={hotel.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{hotel.name}</h2>
                                <p className="text-gray-600 text-sm mt-1">{hotel.address}</p>
                                <p className="text-gray-700 mt-3 line-clamp-3">
                                    {hotel.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
