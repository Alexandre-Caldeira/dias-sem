document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('2024/06/19');
    const today = new Date();
    let daysDifference = Math.ceil((today - targetDate) / (1000 * 60 * 60 * 24))-1;
    
    let displayText;
    if (daysDifference === 0) {
        displayText = `💀${daysDifference}📉`;
    } else {
        displayText = `🌈${daysDifference.toString().padStart(10, ' ')}📈`;
    }
    
    document.getElementById('days').innerText = displayText;
    
    const dateInfoElement = document.getElementById('dateInfo');
    const formattedDate = `${targetDate.getDate()}/${targetDate.getMonth() + 1}/${targetDate.getFullYear()}`; // Formata a data
    dateInfoElement.innerText = `(desde ${formattedDate})`; // Exibe a data formatada
});
