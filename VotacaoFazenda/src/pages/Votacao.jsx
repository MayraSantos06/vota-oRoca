import listarNaRoca from "../services/listarNaRoca";
import listarForaDaRoca from "../services/listarForaDaRoca";
import registrarVoto from "../services/registrarVoto";
import { useState } from "react";

const [ultimoVot, setUltimoVoto] = useState(null);
const [votosNaSessao, setVotoNaSessao] = useState(0);

function handleVotar(participante){
    registrarVoto(participante.id);



}
<div className="grid-roca">
{listarNaRoca.map((p)=> (
    <ParticipanteCard
        key={p.id}
        participante={p}
        onVotar={handleVotar}
    />
))}

</div>