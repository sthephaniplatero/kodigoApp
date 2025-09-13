import React, { useEffect, useState } from "react";
import { rm } from "../api/rm";
import HotelCard from "../components/HotelCard";

export default function Home() {
  const [acomodaciones, setAcomodaciones] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState("");

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

  // Hoteles filtrados
  const filteredHotels = acomodaciones.filter(hotel =>
    hotel.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterCity ? hotel.city === filterCity : true)
  );

  // Estadísticas
  const totalCities = [...new Set(acomodaciones.map(h => h.city))].length;
  const topHotels = acomodaciones.filter(h => h.rating >= 4.5).length;

  return (
    <div className="container py-5 mt-4">
      <h1 className="mb-4">Dashboard de Hoteles</h1>

      {/* --- Cards de resumen --- */}
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <div className="card shadow-sm p-3 text-center">
            <h6>Total Hoteles</h6>
            <h3>{acomodaciones.length}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card shadow-sm p-3 text-center">
            <h6>Ciudades</h6>
            <h3>{totalCities}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card shadow-sm p-3 text-center">
            <h6>Hoteles Destacados</h6>
            <h3>{topHotels}</h3>
          </div>
        </div>
      </div>

      {/* --- Filtros --- */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar hotel..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
          >
            <option value="">Todas las ciudades</option>
            {[...new Set(acomodaciones.map(h => h.city))].map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>

      {/* --- Listado de hoteles --- */}
      {filteredHotels.length === 0 ? (
        <p>No hay hoteles disponibles.</p>
      ) : (
        <div className="row">
          {filteredHotels.map(hotel => (
            <div key={hotel.id} className="col-md-4 mb-4">
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
