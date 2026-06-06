import type { Tarefa } from "./tarefa";


interface ItemTarefaProps {
    dados: Tarefa;
}

export function ItemTarefa({ dados }: ItemTarefaProps) {
    return (
        <div>
            <h2>{dados.titulo}</h2>
            <p>{dados.descricao}</p>
            <p>Prioridade: {dados.prioridade}</p>
            <p>Status: {dados.concluida ? "Concluída" : "Pendente"}</p>
        </div>






    );
}
