import { useEffect, useState } from "react";
import { rm } from "../api/rm";
import HotelCard from "../components/HotelCard"; // 👈 importa el componente

export default function Home() {
  const [acomodaciones, setAcomodaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await rm.get("/accomodations");
        setAcomodaciones(data);
      } catch (err) {
        console.error("Error cargando hoteles:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hoteles disponibles</h1>
      {acomodaciones.length === 0 ? (
        <p>No hay hoteles disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {acomodaciones.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </div>
  );
}

