import React from "react";
import type { Tarefa } from "./tarefa";
import type { status } from "./filtragem";



interface FiltrarTarefaProps {
    st: status;
    onChange: (retorno: status) => void;
}


export function FiltrarTarefa({ st, onChange }: FiltrarTarefaProps) {
    return (
        <div>

            <button onClick={() => onChange("todas")}>Todas</button>
            <button onClick={() => onChange("concluida")}>Concluídas</button>
            <button onClick={() => onChange("pendente")}>Pendentes</button>
        </div>



    )

}