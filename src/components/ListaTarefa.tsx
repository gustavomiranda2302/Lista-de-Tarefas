import type { Tarefa } from "./tarefa";
import { ItemTarefa } from "./ItemTarefa";
interface ListaTarefaProps {
    lista: Tarefa[];
}

export function ListaTarefa({ lista }: ListaTarefaProps) {
    return (
        <div>
            {lista.map((tarefa) => (
                <ItemTarefa key={tarefa.id} dados={tarefa} />
            ))}
        </div>
    );
}

