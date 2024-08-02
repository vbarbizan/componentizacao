import {
  FaHotel,
  FaPlane,
  FaWalking,
  FaBus,
} from "react-icons/fa";

export default function Pacote({ nome, preco, descricao, inclusas, buttonn }) {
  return (

    <div className="card-pacote">
      <div className="pacote-header">
        <h3>{nome}</h3>
        <div className="preco">
          <span className="preco-anterior">{preco}</span>
          <span className="preco-atual">{preco}</span>
        </div>
      </div>
      <p>
        {descricao}
      </p>
      <p>Incluem:</p>
      <ul>
        <li>
          <FaHotel /> {inclusas}
        </li>
        <li>
          <FaPlane /> {inclusas}
        </li>
        <li>
          <FaWalking /> {inclusas}
        </li>
        <li>
          <FaBus /> {inclusas}
        </li>
      </ul>
      <button type="button" className="btn-comprar">
        {buttonn}
      </button>
    </div>
  )
}