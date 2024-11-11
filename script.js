console.log("Я загадал число от 1 до 10. Попробуй угадать его!");
let secret = Math.floor(Math.random() * 10) + 1;

let attempts = 3;

// prompt()

while (attempts > 0) {
    let number = Number(prompt("Введите число: "));
    if (number < secret) {
        console.log('Секретное число больше');
        attempts--;
    } else if (number === secret) {
        console.log("Вы угадали!");
        break;
    } else {
        console.log("Секретное число меньше");
        attempts--;
    }
    if (attempts > 1) {
        console.log('У вас осталось', attempts, "попытки");
    } else if (attempts === 1) {
        console.log('У вас осталась', attempts, 'попытка');
    } else {
        console.log('Вы проиграли');
    }
}
// let a = 0

// while (a < 10) {
//     console.log(a);
//     a++;
// }
