import type { status } from "./filtragem";


interface FiltrarTarefaProps {
    st: status;
    onChange: (retorno: status) => void;
}


export function FiltrarTarefa({ st, onChange }: FiltrarTarefaProps) {
    return (
        <div>

            <button className={st === "todas" ? "ativo" : ""} onClick={() => onChange("todas")}>Todas</button>
            <button className={st === "concluida" ? "ativo" : ""} onClick={() => onChange("concluida")}>Concluídas</button>
            <button className={st === "pendente" ? "ativo" : ""} onClick={() => onChange("pendente")}>Pendentes</button>
        </div>



    )

}