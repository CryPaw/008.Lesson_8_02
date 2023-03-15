let yearOfBirth = prompt('Ваш рік народження');
let selectedCity = prompt('В якому місті проживаєте');
let selectedSport = prompt('Ваш улюблений вид спорту');
let messageAboutCity;
let messageAboutSport;
let messageAboutАge;

if (yearOfBirth > 2023)
{messageAboutАge = 'Ви не можете жити у майбутньому'}
else if (yearOfBirth < 0)
{messageAboutАge = "Ви ввели від'ємне число"}
else if (yearOfBirth === null)
{messageAboutАge = "Шкода, що Ви не захотіли ввести свій вік"}
else if (yearOfBirth === '')
{messageAboutАge = "Шкода, що Ви не захотіли ввести свій вік"}
else if (yearOfBirth <= 1900)
{messageAboutАge = "Люди стільки не живуть"}
else if (isNaN(yearOfBirth) === true)
{messageAboutАge = "Шкода, що Ви не захотіли ввести свій вік"}
else {
    messageAboutАge = `Вам ${2023 - parseInt(yearOfBirth, 10)} років`;
}

if (selectedCity === null)
{messageAboutCity = "Шкода, що Ви не захотіли ввести своє місто"}
else {
switch (selectedCity.toLowerCase()){
    case (''):
        messageAboutCity = "Шкода, що Ви не захотіли ввести своє місто";
        break;
    case "київ":
        messageAboutCity = "Ти живеш у столиці України";
        break;
    case "вашингтон":
        messageAboutCity = "Ти живеш у столиці Сполучених Штатів Америки";
        break;
    case "лондон":
        messageAboutCity = "Ти живеш у столиці Англії";
        break;
    default:
        messageAboutCity = `Ти живеш у місті ${selectedCity}`;
}
}

if (selectedSport === null)
{messageAboutSport = "Шкода, що Ви не захотіли ввести свій улюблений вид спорту"}
else {
switch (selectedSport.toLowerCase()){
    case (''):
        messageAboutSport = "Шкода, що Ви не захотіли ввести свій улюблений вид спорту";
        break;
    case "бокс":
        messageAboutSport = "Круто! Хочеш стати як Майк Тайсон?";
        break;
    case "баскетбол":
        messageAboutSport = "Круто! Хочеш стати як Майк Джордан?";
        break; 
    case "футбол": 
        messageAboutSport = "Круто! Хочеш стати як Криштиану Рональдо?";
        break;
    default:
        messageAboutSport = `${selectedSport} гарний вид спорту`;
}
}

alert  (messageAboutАge + ' \n' + messageAboutCity + ' \n' + messageAboutSport);
