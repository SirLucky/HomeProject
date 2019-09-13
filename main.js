let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData  = {
    cash: money,
    timeData: time,
    expanses: {},
    optionalEpanses: {},
    income:[],
    timeData: time,
    saving: false
};

for(let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    if( (typeOf(a))=== 'string' && (typeOf(a)) != null && (typeOf(b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expanses[a] = b;
    } else {
        continue
    }
}
alert(appData.cash / 30);
let x = 0;
while ( x < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце?" , ""),
        b = prompt("Во сколько обойдется?", "");
    appData.expanses[a] = b;
    x++;

}
let y = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце?" , ""),
        b = prompt("Во сколько обойдется?", "");
    appData.expanses[a] = b;
    y++;
} while ((typeOf(a))=== 'string' && (typeOf(a)) != null && (typeOf(b)) != null &&
a != '' && b != '' && a.length < 50);
alert(appData.cash / 30);