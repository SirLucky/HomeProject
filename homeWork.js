let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');

    }
}
start();

let appData  = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};
/*function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');

        if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

appData.moneyPerDay = appData.cash / 30;
alert(appData.cash / 30);

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка')
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings(); */
let day;
function derectDayBuget() {
    day = money/30;
    alert('Ваш дневной бюджет: ' + day);
};
derectDayBuget();
function derectLevel() {
    if(appData.cash < 100) {
        alert('Минимальный уровень достатка!');
    } else if(appData.cash > 100 && appData.cash < 2000) {
        alert('Высокий уровень достатка!');
    } else if(appData.cash > 2000) {
        alert('Вы баснословно богаты!!!');
    } else {
        alert('Произошла ошибка!');
    }
}
derectLevel();
function chooseOptExpenses() {
    appData.optionalExpenses[1] = prompt('Статья не обязательных расходов?', ''),
        appData.optionalExpenses[2] = prompt('Статья не обязательных расходов?', ''),
        appData.optionalExpenses[3] = prompt('Статья не обязательных расходов?', '');
}
chooseOptExpenses();


