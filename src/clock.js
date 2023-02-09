
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    
    const hourInput = document.getElementById('hour');
    const hours = hourInput.value;
    const minuteInput = document.getElementById('minute');
    const minutes = minuteInput.value;
  
    const angle = Math.abs(minutes / 2 + hours * 30 - minutes * 6)

    console.log('angle', angle);
    document.getElementById("angle").innerHTML = `${angle}&#176`;

    if ((hours >= 12 && minutes > 0) || (minutes > 59)) {
        document.getElementById('error').innerHTML = 'Time is not valid'
        document.getElementById("angle").innerHTML = '';
        return false;
        
    } else {
        document.getElementById("angle").innerHTML = `${angle}&#176`;
        document.getElementById('error').innerHTML = '';
        return true;
    }  
}