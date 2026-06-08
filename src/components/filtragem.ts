import type { Tarefa } from "./tarefa";
/* METODO ANTIGO
export function Filtragem(tarefas: Tarefa[]) {
  function concluida(tarefas: Tarefa[]) {
    let tarefaConcluida: Tarefa[] = [];

    for (let i = 0; i < tarefas.length; i++) {
      if (tarefas[i].concluida === true) {
        tarefaConcluida.push(tarefas[i]);
      }
    }
    return tarefaConcluida;
  }

  function pendente(tarefas: Tarefa[]) {
    let tarefaPendente: Tarefa[] = [];

    for (let i = 0; i < tarefas.length; i++) {
      if (tarefas[i].concluida === false) {
        tarefaPendente.push(tarefas[i]);
      }
    }
    return tarefaPendente;
  }

  function todas(tarefas: Tarefa[]) {
    for (let i = 0; i < tarefas.length; i++) {
      return tarefas;
    }
  }
}
*/
export function Filtragem(tarefas: Tarefa[], st: status) {
  if (st === "concluida") {
    return tarefas.filter((tarefa) => tarefa.concluida === true);
  } else if (st === "pendente") {
    return tarefas.filter((tarefa) => tarefa.concluida === false);
  } else {
    return tarefas;
  }
}
export type status = "concluida" | "pendente" | "todas";
