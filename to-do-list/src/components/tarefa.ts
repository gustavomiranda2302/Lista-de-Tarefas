export type Tarefa = {
    id: number;
    titulo: string;
    descricao: string;
    prioridade: 'Baixa' | 'Média' | 'Alta';
    concluida: boolean;
}  
