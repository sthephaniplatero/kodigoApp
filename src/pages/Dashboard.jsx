import { useEffect, useState } from "react";
import { rm } from "../api/rm";
import HotelCard from "../components/HotelCard";

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
    <div className="container py-5 mt-4">
      <h1 className="mb-4">Hoteles disponibles</h1>
      {acomodaciones.length === 0 ? (
        <p>No hay hoteles disponibles.</p>
      ) : (
        <div className="row">
          {acomodaciones.map((hotel) => (
            <div key={hotel.id} className="col-md-4 mb-4">
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}