import { useState } from "react";
import Card from "./Card";

function Formulario() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (input1.length < 3 || input1.startsWith(" ") || input2.length < 6) {
      setError(true);
    } else {
      setError(false);
      setShowCard(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          
          placeholder="Nombre"
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Color Formato HEX"
        />
        <button type="submit">Enviar</button>
      </form>
      {error && (
        <p>Por favor chequea que la información sea correcta</p>
      )}
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default Formulario;
