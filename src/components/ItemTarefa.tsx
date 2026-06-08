import type { Tarefa } from "./tarefa";
import '../style/itemtarefa.css';


interface ItemTarefaProps {
    dados: Tarefa;
}

export function ItemTarefa({ dados }: ItemTarefaProps) {
    return (
        <div className="item-tarefa">
            <h2>{dados.titulo}</h2>
            <p>{dados.descricao}</p>
            <p>Prioridade: {dados.prioridade}</p>
            <p>Status: {dados.concluida ? "Concluída" : "Pendente"}</p>
        </div>






    );
}
