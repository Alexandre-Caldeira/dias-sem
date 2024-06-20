document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('2024/06/17');
    const today = new Date();
    let daysDifference = Math.ceil((today - targetDate) / (1000 * 60 * 60 * 24));
    
    document.getElementById('days').innerText = `🌈${daysDifference.toString().padStart(10, ' ')}🫧`; // Preenche com espaços para 10 dígitos
    
    const dateInfoElement = document.getElementById('dateInfo');
    const formattedDate = `${targetDate.getDate()}/${targetDate.getMonth() + 1}/${targetDate.getFullYear()}`; // Formata a data
    dateInfoElement.innerText = `(desde ${formattedDate})`; // Exibe a data formatada
});
