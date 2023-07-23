let headers = document.querySelector('h1')
headers.style.color = "blue"

let nheader = document.getElementById('contacts')
nheader.style.color = "blue"

function MyFunc(){
    const testvar = 'testtesttest'
    document.write(testvar)
}

// // Task 1
// alert (158+2);

// // Task 2
// let strmyname = "Daria"
// alert("Hello, " + strmyname + "!")

// // Task 3
// strmyname = prompt("What is your name?")

// // Task 4
// function PromptName(MyName)
// {
//     alert("My name " + MyName)
// }
// PromptName(strmyname)

// //Task 5
// let strmynew = confirm ("я прав?");
// if (strmynew)
// {
//     alert("Да");

// }
// else
// {
//     alert("Нет");
// }

// // Задача 6
// let age = prompt("Ваш возраст: ");

// switch(age) {
//     case 18:
//         alert('Вы совершеннолетний, все можно!');
//         break
//     case 10:
//         alert('Вам надо учить уроки!');
//         break
//     case 30:
//         alert('Ложитесь спать, завтра на работу');
//         break
//     default:
//         alert('Мы не знаем что Вам делать');
// }

function askFavoriteMovie() {
    var favoriteMovie = prompt("Введите ваш любимый фильм:");

    if (favoriteMovie === null || favoriteMovie === "") {
        alert("Вы не ввели название фильма. Попробуйте еще раз.");
    } 
    else if (favoriteMovie.toLowerCase() === "зеленая миля") {
        alert("Отличный выбор! 'Зеленая миля' - отличный фильм!");
    } 
    else {
        alert("Попробуйте еще раз. Ваш любимый фильм не " + favoriteMovie + ".");
    }
}

askFavoriteMovie();

