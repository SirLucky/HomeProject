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
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBuget: function () {
        appData.moneyPerDay = (appData.cash / 30).toFixed();
        alert('Ваш дневной бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if(appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка!');
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Высокий уровень достатка!');
        } else if(appData.moneyPerDay > 2000) {
            console.log('Вы баснословно богаты!!!');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <=3 ; i++) {
            let opt = prompt('Статья не обязательных расходов?');
            appData.optionalExpenses[i] = opt;
            console.log(appData.optionalExpenses);
        }
    },

chooseIncome: function () {
        for (let j = 0; j = 1; j++) {
            let ent = prompt('Что принесет дополнительныц доход? (Перечислите через запятую)', '');
            if(typeof(ent) === "string" && ent != "" && ent != null) {
                console.log("Happi!");
                let items = ent;
                appData.income[0] = items.split();
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
                appData.income = ent.split(",");
                break;
        } else {
                console.log('Arror!');
                j--;
            }
        };
        appData.income.forEach(function (item, i, arr) {

            console.log((i+1) + ': ' + item );
        });
    }
};
console.log(appData.income);