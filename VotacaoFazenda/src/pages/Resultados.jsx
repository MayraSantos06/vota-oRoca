import { useState } from "react";
import { calcularTotalVotos, obterVotos, zerarVotos } from "../services/votacaoService";

const [votos, setVotos] = useState(() => obterVotos());

const total = calcularTotalVotos(votos);
const resultado = calcularTotalVotos(votos);

<div className="barra">
    <div className="barra-preencida" style={{width: `${p.percentual}%`}}
    />
</div>

function  handleZear(params) {
    if (window.confirm('Apagar todos os votos?')){
        zerarVotos();
        setVotos({});
    }
}