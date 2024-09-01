// src/components/BuscarEstudiante.js
import React, { useState } from 'react';
import axios from 'axios';
import './BuscarEstudiante.css'; // Importa el archivo de estilos

const BuscarEstudiante = () => {
  const [carnet, setCarnet] = useState('');
  const [estudiante, setEstudiante] = useState(null);
  const [error, setError] = useState('');

  const handleBuscar = async () => {
    setError('');
    try {
      if (!carnet.trim()) {
        setError('Debe ingresar un número de carnet.');
        return;
      }

      // Realiza la solicitud a la API para buscar el estudiante por carnet
      const response = await axios.get(`https://test-deploy-12.onrender.com/estudiantes/?carnet=${carnet}`);
      const data = response.data;

      // Verifica si se encontró algún estudiante
      if (data.length > 0) {
        setEstudiante(data[0]); // Usa solo el primer estudiante encontrado
      } else {
        setEstudiante(null);
        setError('No se encontraron datos para el carnet proporcionado.');
      }
    } catch (err) {
      setError('Error al buscar el estudiante. Inténtalo nuevamente.');
      setEstudiante(null);
    }
  };

  const handleLimpiar = () => {
    setCarnet('');
    setEstudiante(null);
    setError('');
  };

  const handleCancelar = () => {
    handleLimpiar();
    // Puedes redirigir o hacer alguna otra acción aquí si es necesario
  };

  return (
    <div className="container">
      <h1>Buscar Estudiante</h1>
      <div>
        <label className="label">Carnet:</label>
        <input 
          type="text" 
          value={carnet} 
          onChange={(e) => setCarnet(e.target.value)} 
        />
      </div>
      <div>
        <button onClick={handleBuscar}>Buscar</button>
        <button onClick={handleLimpiar}>Limpiar</button>
        <button onClick={handleCancelar}>Cancelar</button>
      </div>
      {error && <p className="error">{error}</p>}
      {estudiante ? (
        <div className="results">
          <div className="result-item">
            <p><strong>Carnet:</strong> {estudiante.Carnet || 'No disponible'}</p>
            <p><strong>Nombres:</strong> {estudiante.Estudiante || 'No disponible'}</p>
            <p><strong>Correo:</strong> {estudiante.Email || 'No disponible'}</p>
            <p><strong>Sección:</strong> {estudiante.Seccion || 'No disponible'}</p>
          </div>
        </div>
      ) : (
        !error && <p>No hay datos disponibles.</p>
      )}
    </div>
  );
};

export default BuscarEstudiante;
