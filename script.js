document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('2024/06/17');
    const today = new Date();
    let daysDifference = Math.ceil((today - targetDate) / (1000 * 60 * 60 * 24));
    
    let displayText;
    if (daysDifference === 0) {
        displayText = `💀${daysDifference}📉`;
    } else {
        displayText = `🌈${daysDifference.toString().padStart(10, ' ')}🫧`;
    }
    
    document.getElementById('days').innerText = displayText;
    
    const dateInfoElement = document.getElementById('dateInfo');
    const formattedDate = `${targetDate.getDate()}/${targetDate.getMonth() + 1}/${targetDate.getFullYear()}`; // Formata a data
    dateInfoElement.innerHTML = `(desde ${formattedDate})`;

    // Exemplo de como adicionar o texto sobre os streaks
    // const eraStreak = "Era: 30 dias (01/07/2023 até 30/07/2023)";
    // const recordStreak = "Recorde: 45 dias (01/08/2023 até 15/08/2023)";

    // const fullText = `<br><br>${eraStreak}<br>${recordStreak}`;
    // dateInfoElement.insertAdjacentHTML('afterend', fullText); // Adiciona o texto após o elemento dateInfo
});

document.addEventListener('DOMContentLoaded', function() {
    fetchStreakData();
});

function fetchStreakData() {
    fetch('https://raw.githubusercontent.com/Alexandre-Caldeira/dias-sem/main/streaks.json') // Atualize o caminho conforme necessário
      .then(response => response.json())
      .then(data => {
            const streaks = data;
            const lastStreak = streaks[streaks.length - 1];
            const longestStreak = streaks.reduce((max, current) => max.days > current.days? max : current);

            updateStreakDisplay(lastStreak, longestStreak);
        });
}

function updateStreakDisplay(lastStreak, longestStreak) {
    const detailsDiv = document.getElementById('streakDetails');
    detailsDiv.innerHTML = `
        Era: ${lastStreak.days} dias (${lastStreak.startDate} até ${lastStreak.endDate})
        Recorde: ${longestStreak.days} dias (${longestStreak.startDate} até ${longestStreak.endDate})
    `;
}
