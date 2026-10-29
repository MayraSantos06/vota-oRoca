function PrticipanteCard({ participante, onVotar }) {
    const { nome, foto, naRoca } = participante;

    return(
        <article className={naRoca ? 'card card-roca' : 'card'}>{naRoca && <span className="selo-roca">Na roça</span>}
      
      <div className="grid-roca">
        <img
        src={foto}
        alt={nome}
        className={"card-foto"}
      />

      <div className="header-card">
        <span className="number">
          #{String(nome.id).padStart(3, "0")}
        </span>
      </div>

      

      <div className="main-info-card">
        <h2 className="title">{nome}</h2>

        <button
          type="button"
          onClick={() => onVotar(participante)}>Votar para Eliminar
        </button>
      </div>

      </div>
    </article>
    );
}

export default PrticipanteCard;