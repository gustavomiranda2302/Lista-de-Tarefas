import type { Tarefa } from "./tarefa";
import React from "react";
interface CriarTarefaProps {
    aoCriarTarefa: (tarefa: Tarefa) => void;

}

export function CriarTarefa({ aoCriarTarefa }: CriarTarefaProps) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const novaTarefa: Tarefa = {
            id: Date.now(),
            titulo: formData.get("titulo") as string,
            descricao: formData.get("descricao") as string,
            prioridade: formData.get("prioridade") as 'Baixa' | 'Média' | 'Alta',
            concluida: false,
        };
        aoCriarTarefa(novaTarefa);
        event.currentTarget.reset();





    }


    return (
        <div>
            <h2>Criar Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="titulo">Título:</label>

                    <input type="text" id="titulo" name="titulo" required />
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea id="descricao" name="descricao" required></textarea>
                    <label htmlFor="prioridade">Prioridade:</label>
                    <select id="prioridade" name="prioridade" required>
                        <option value="Baixa">Baixa</option>
                        <option value="Média">Média</option>
                        <option value="Alta">Alta</option>
                    </select>


                </div>
                <button type="submit">Adicionar Tarefa</button>
            </form>
        </div>

    )


}
