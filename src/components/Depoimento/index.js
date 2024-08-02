

export default function Depoimentos({nome,avaliacao}) {
    return(
        
          <div className="card-depoimento">
            <div className="depoimento-info">
              <h3>{nome}</h3>
              <blockquote>{avaliacao}</blockquote>
            </div>
          </div>
          

          
    )
}