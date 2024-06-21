document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('2024/06/21');

    const today = new Date();
    
    today.setHours(today.getHours() - 3); // Subtrai 3 horas para ajustar para Brasília (UTC-3)

    let daysDifference = Math.ceil((today - targetDate) / (1000 * 60 * 60 * 24));
    
    let displayText;
    if (daysDifference === 0) {
        displayText = `💀 ${daysDifference} 📉`;
    } else {
        daysDifference = daysDifference-1;
        displayText = `🌈 ${daysDifference.toString().padStart(10, ' ')} 📈`;
    }
    
    document.getElementById('days').innerText = displayText;
    
    const dateInfoElement = document.getElementById('dateInfo');
    const formattedDate = `${targetDate.getDate()}/${targetDate.getMonth() + 1}/${targetDate.getFullYear()}`; // Formata a data
    dateInfoElement.innerHTML = `(desde ${formattedDate})`;

    fetch('https://raw.githubusercontent.com/Alexandre-Caldeira/dias-sem/main/streaks.json') // Atualize o caminho conforme necessário
      .then(response => response.json())
      .then(data => {
            const streaks = data;
            const lastStreak = streaks[streaks.length - 1];
            const longestStreak = streaks.reduce((max, current) => max.days > current.days? max : current);

            updateStreakDisplay(lastStreak, longestStreak);
        });

});

function updateStreakDisplay(lastStreak, longestStreak) {
    const detailsDiv = document.getElementById('streakDetails');
    detailsDiv.innerHTML = `<br><br>
        > Era: ${lastStreak.days} dias (${lastStreak.startDate} - ${lastStreak.endDate})<br>
        > Recorde: ${longestStreak.days} dias (${longestStreak.startDate} - ${longestStreak.endDate})
    `;
}
