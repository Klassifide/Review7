function theTimeIs() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  document.getElementById("dateAndTime").innerText = `The time is ${hours}:${minutes}`;
}

function surprise() {
  alert('Stop clicking this button!');
}


document.getElementById("B2").addEventListener("click", theTimeIs);
const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
console.log(`The time is ${hours}:${minutes}`);


document.getElementById('B3').addEventListener('click', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.style.backgroundColor = 'blue';
    });
  });

  document.getElementById('B4').addEventListener('click', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.style.backgroundColor = 'white';
    });
  });




