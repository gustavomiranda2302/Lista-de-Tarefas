import type { status } from "./filtragem";
import '../style/filtrartarefa.css';
import '../style/buttons.css';
interface FiltrarTarefaProps {
    st: status;
    onChange: (retorno: status) => void;
}


export function FiltrarTarefa({ st, onChange }: FiltrarTarefaProps) {
    return (

        <div className='area-filtro'>
            <button className={st === "todas" ? "ativo" : ""} onClick={() => onChange("todas")}>Todas</button>
            <button className={st === "concluida" ? "ativo" : ""} onClick={() => onChange("concluida")}>Concluídas</button>
            <button className={st === "pendente" ? "ativo" : ""} onClick={() => onChange("pendente")}>Pendentes</button>
        </div>


    )

}