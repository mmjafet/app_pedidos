import React, { useState } from 'react';

function PedidoForm() {
  const [nombre, setNombre] = useState('');
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Pedido realizado por ${nombre}: ${cantidad} x ${producto}`);
    // Aquí puedes agregar la lógica para manejar el pedido
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre del Cliente:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="producto">Producto:</label>
        <input
          type="text"
          id="producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar Pedido</button>
    </form>
  );
}

export default PedidoForm;