import Flag from "react-world-flags";


export default function Destino({ bandeira, imagem, nome, descricao }) {
    return (
        <div className="card-destino">
            <img
                src={imagem}
                alt="Paris"
                className="imagem-destino"
            />
            <h3>
                <Flag code={bandeira} height="16" className="bandeira" /> {nome}
            </h3>
            <p>
                {descricao}
            </p>
        </div>
    )
}