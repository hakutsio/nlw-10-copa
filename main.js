function creatGame(player1, hour, player2) { 
  return `
    <li>
      <img src="${player1}" alt="bandeira ${player1}">
      <strong>${hour}</strong>
      <img src="${player2}" alt="bandeira ${player2}"> 
    </li>
`
}

let delay = -0.4;

function creatCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>${games}</ul>
  </div>  
  `
}

document.querySelector('#cards').innerHTML = 
  creatCard("22/11", "terça", 
    creatGame("./assets/icon-denmark.svg", "10:00","./assets/icon-tunisia.svg") +
      creatGame("./assets/icon-mexico.svg", "13:00","./assets/icon-poland.svg") +
        creatGame("./assets/icon-france.svg", "16:00","./assets/icon-australia.svg")) +

  creatCard("26/11", "sabado", 
    creatGame("./assets/icon-tunisia.svg", "07:00","./assets/icon-australia.svg") +
      creatGame("./assets/icon-poland.svg", "10:00","./assets/icon-saudiarabia.svg") +
        creatGame("./assets/icon-france.svg", "13:00","./assets/icon-denmark.svg")) +

  creatCard("30/11", "quarta", 
    creatGame("./assets/icon-france.svg", "12:00","./assets/icon-tunisia.svg") +
      creatGame("./assets/icon-denmark.svg", "12:00","./assets/icon-australia.svg") +
        creatGame("./assets/icon-poland.svg", "16:00","./assets/icon-argentina.svg"))
