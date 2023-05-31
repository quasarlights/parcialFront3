
function Card({ input1, input2 }) {
  return (
    <div>
      <h2>Información ingresada:</h2>
      <p>Gracia {input1}, tu color favorito es:</p>
      <button style={{ backgroundColor: input2, color: 'white' }}>{input2}</button>
      
    </div>
  );
}

export default Card;
