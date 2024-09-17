
// let name = prompt("Введите ФИО");
// let gender = prompt("Введите ваш пол");
// let age = prompt("Введите возраст");
// let email = prompt("Введите почту");
// confirm("Ваше ФИО: "+ name +"\nВаш пол: "+ gender +"\nВаш возраст: "+ age +"\nВаша почта: " + email + "\nВсе верно?");


let ticketNum = prompt("Введите номер билета:");

if (ticketNum.length == 6) 
{
    let fTSum = parseInt(ticketNum[0]) + parseInt(ticketNum[1]) + parseInt(ticketNum[2]);
    let lTS = parseInt(ticketNum[3]) + parseInt(ticketNum[4]) + parseInt(ticketNum[5]);

    alert(fTSum === lTS ? "Ваш билет счастливый!" : "Ваш билет не счастливый.");
} 
else 
{
    alert("Error");
}