import { useState } from "react";

function Dashboard() {
  const [called, setCalled] = useState([
    {
      id: 0,
      nome: "Roberto de Oliveira",
      called:
        "Iniciar o banco de dados: json-server --watch db.json --port 3001",
      date: "25/04/1998",
    },
    {
      id: 1,
      nome: "Naruto chavão",
      called: "Realizado o reset de senha para a colaboradora do RH",
      date: "01/05/2005",
    },
    {
      id: 2,
      nome: "Chorão do Charlie Brown Jr",
      called:
        "Dei um flip por cima do teatro municipal e mandei um grind na escada despencando",
      date: "15/08/2023",
    },
    {
      id: 3,
      nome: "El Chaves",
      called:
        "Morar dentro de um barril com vizinho esquisitos e comer todos os churros da dona florinda",
      date: "30/05/1996",
    },
    {
      id: 4,
      nome: "Rogerio Ceni",
      called:
        "Sou o melhor goleiro da história, e adorava fazer gol no Corinthians, eu fui campeão mundial e o Palmeira não",
      date: "25/04/1998",
    },
  ]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {called.map((calle) => (
          <li key={calle.id}>
            {<label>Analista:</label>} {calle.nome} {<br />}
            {<label>Detalhes do atendimento:</label>} {calle.called} {<br />}
            {<label>Data: </label>} {calle.date} {<br />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
