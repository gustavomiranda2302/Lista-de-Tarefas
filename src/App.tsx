import { useState } from 'react'
import type { Tarefa } from './components/tarefa';
import { Filtragem } from './components/filtragem';
import type { status } from './components/filtragem';
import { FiltrarTarefa } from './components/FiltrarTarefa';
import { ListaTarefa } from './components/ListaTarefa';
import { CriarTarefa } from './components/CriarTarefa';
import './style/app.css';

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [st, setStatus] = useState<status>("todas");
  function mudarFiltro(st: status) {
    setStatus(st);
  }
  function adicionarTarefa(tarefa: Tarefa) {
    setTarefas([...tarefas, tarefa]);
  }
  const tarefasFiltradas = Filtragem(tarefas, st);

  return (
    <main>

      <CriarTarefa aoCriarTarefa={adicionarTarefa} />


      <FiltrarTarefa st={st} onChange={mudarFiltro} />
      <div className="botoes-filtros">
        <ListaTarefa lista={tarefasFiltradas} />
      </div>
      <span>Quantidade de tarefas: {tarefasFiltradas.length}</span>

    </main>
  );
}

export default App
