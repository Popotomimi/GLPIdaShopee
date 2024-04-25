import React, { useState, useRef } from "react";
import { format } from "date-fns";
import { BsFillTrash3Fill, BsCopy, BsBoxArrowInRight } from "react-icons/bs";

function App() {
  // Seleciona o textarea para excluir o conteudo.
  const detailsRef = useRef(null);
  // Guarda o nome do analista.
  const [name, setName] = useState("");
  // Guarda os detalhes de atendimento.
  const [details, setDetails] = useState("");
  // Guarda a data da abertura de chamados.
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  // Objeto que aguarda detalhes do atendimento, nome e data.
  const [called, setCalled] = useState([
    {
      id: 0,
      nome: "Roberto",
      called:
        "Iniciar o banco de dados: json-server --watch db.json --port 3001",
      date: currentDateTime,
    },
  ]);

  // Seta os valores no Array de Objetos.
  const handleSubmit = async (e) => {
    e.preventDefault();

    setCalled([
      ...called,
      {
        id: called.length,
        nome: name,
        called: details,
        date: currentDateTime,
      },
    ]);

    {
      /*const newCalled = {
      id: called.length,
      nome: name,
      called: details,
      date: currentDateTime,
    };

    // POST request para adicionar o novo objeto ao 'called' no db.json
    const response = await fetch("http://localhost:3001/called", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCalled),
    });

    const data = await response.json();
    console.log(data);

    // Atualiza o estado local após a adição bem-sucedida
  setCalled([...called, data]);*/
    }

    detailsRef.current.value = "";
  };

  // Exclui os Objetos do Array de Objetos.
  const handleDelete = (id) => {
    let updatedCalled = called.filter((calle) => calle.id !== id);
    setCalled(updatedCalled);
  };

  // Copia a informação de cada Objeto.
  const handleCopy = (calle) => {
    const detailsToCopy = `Analista: ${calle.nome}\nDetalhes do atendimento: ${
      calle.called
    }\nData: ${format(calle.date, "dd/MM/yyyy")}`;
    navigator.clipboard
      .writeText(detailsToCopy)
      .then(() => {
        console.log("Texto copiado com sucesso!");
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
  };

  return (
    <div>
      <h1>Nome da empresa</h1>
      <form onSubmit={handleSubmit}>
        <label>Selecione o analista: </label>
        <select onChange={(e) => setName(e.target.value)}>
          <option defaultValue="selecione" selected disabled>
            Selecione
          </option>
          <option value="Anastacio da Silva">Anastacio da Silva</option>
          <option value="Frederico de Paula">Frederico De Paula</option>
          <option value="Roberto de Oliveira">Roberto de Oliveira</option>
        </select>
        <label>Detalhes do atendimento: </label>
        <textarea
          ref={detailsRef}
          id="texts"
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Digite os detalhes do chamado"
        ></textarea>
        <button title="Enviar Chamado" className="btn-submit">
          Enviar <BsBoxArrowInRight />
        </button>
      </form>
      <h1>Chamados:</h1>
      <ul>
        {called.map((calle) => (
          <li key={calle.id}>
            {<label>Analista:</label>} {calle.nome} {<br />}
            {<label>Detalhes do atendimento:</label>} {calle.called} {<br />}
            {<label>Data: </label>} {format(calle.date, "dd/MM/yyyy")} {<br />}
            {
              <BsFillTrash3Fill
                title="Excluir"
                onClick={() => handleDelete(calle.id)}
                className="delete"
              />
            }{" "}
            {
              <BsCopy
                title="Copiar"
                className="copy"
                onClick={() => handleCopy(calle)}
              />
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
