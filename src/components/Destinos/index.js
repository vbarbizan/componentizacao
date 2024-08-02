import {
    FaHotel,
    FaPlane,
    FaWalking,
    FaBus,
    FaStar,
    FaStarHalfAlt,
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
    FaEnvelope,
    FaHome,
    FaMapMarkedAlt,
    FaSuitcase,
    FaComments,
    FaFacebook,
    FaTwitter,
    FaInstagram,
  } from "react-icons/fa";

export default function Destinos() {
    return(
        <section id="destinos" className="destinos-populares">
        <h2>Destinos Populares</h2>
        <div className="destinos-grid">
          <div className="card-destino">
            <img
              src="https://oficinadeinverno.com.br/cdn/shop/articles/eiffel-tower-sunrise1.jpg?v=1659494576"
              alt="Paris"
              className="imagem-destino"
            />
            <h3>
              <Flag code="FRA" height="16" className="bandeira" /> Paris
            </h3>
            <p>
              Paris, conhecida como a cidade do amor, oferece uma mistura de
              cultura, arte e história. Visite a Torre Eiffel, o Museu do Louvre
              e explore as charmosas ruas de Montmartre.
            </p>
          </div>
          <div className="card-destino">
            <img
              src="https://classic.exame.com/wp-content/uploads/2017/10/ny-1.jpg?quality=70&strip=info&w=1024"
              alt="Nova York"
              className="imagem-destino"
            />
            <h3>
              <Flag code="USA" height="16" className="bandeira" /> Nova York
            </h3>
            <p>
              Nova York, a cidade que nunca dorme, é um centro global de
              cultura, moda e finanças. Explore a Times Square, o Central Park e
              desfrute de uma variedade de espetáculos na Broadway.
            </p>
          </div>
          <div className="card-destino">
            <img
              src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo/toquio-pontos-turisticos.jpg"
              alt="Tóquio"
              className="imagem-destino"
            />
            <h3>
              <Flag code="JPN" height="16" className="bandeira" /> Tóquio
            </h3>
            <p>
              Tóquio é uma metrópole vibrante onde a tradição encontra a
              modernidade. Visite o Templo Senso-ji, o cruzamento de Shibuya e
              experimente a culinária local em izakayas e restaurantes.
            </p>
          </div>
        </div>
      </section>
    )
}