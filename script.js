let yearOfBirth = Number(prompt('Ваш рік народження'));
let selectedCity = prompt('В якому місті проживаєте');
let selectedSport = prompt('Ваш улюблений вид спорту');
let messageAboutCity;
let messageAboutSport;
let messageAboutАge;

if (yearOfBirth > 2023)
{messageAboutАge = 'Ви не можете жити у майбутньому'}
else if (yearOfBirth < 0)
{messageAboutАge = 'Ви ввели від`ємне число'}
else {
switch (yearOfBirth){
case (null):
case (''):
    messageAboutАge = "Шкода, що Ви не захотіли ввести свій вік";
break;
default:
    messageAboutАge = `Вам ${2023 - yearOfBirth} років`;
}
}

switch (selectedCity){
    case(null):
    case (''):
        messageAboutCity = "Шкода, що Ви не захотіли ввести своє місто";
        break;
    case "Київ":
    case "Kyiv":
    case "київ":
    case "kyiv":
        messageAboutCity = "Ти живеш у столиці України";
        break;
    case "Вашингтон":
    case "Washington":
    case "вашингтон":
    case "washington":
        messageAboutCity = "Ти живеш у столиці Сполучених Штатів Америки";
        break;
    case "Київ":
    case "Kyiv":
    case "київ":
    case "kyiv":
        messageAboutCity = "Ти живеш у столиці Англії";
        break;
    default:
        messageAboutCity = `Ти живеш у місті ${selectedCity}`;
}

switch (selectedSport){
    case(null):
    case (''):
        messageAboutSport = "Шкода, що Ви не захотіли ввести свій улюблений вид спорту";
        break;
    case "Бокс":
    case "Box":
    case "бокс":
    case "box":
        messageAboutSport = "Круто! Хочеш стати як Майк Тайсон?";
        break;
    case "Баскетбол":
    case "Basketball":
    case "баскетбол":
    case "basketball":
        messageAboutSport = "Круто! Хочеш стати як Майк Джордан?";
        break;
    case "Футбол":
    case "Football":
    case "футбол":
    case "football":
        messageAboutSport = "Круто! Хочеш стати як Криштиану Рональдо?";
        break;
    default:
        messageAboutSport = `${selectedSport} гарний вид спорту`;
}

alert  (messageAboutАge + ' \n' + messageAboutCity + ' \n' + messageAboutSport);