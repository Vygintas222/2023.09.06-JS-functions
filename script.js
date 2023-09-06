// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.


function humanToDogYears(humanYears) {
    let dogYears = humanYears * 7
    let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai.`
    return output
  }
  
//   console.log(humanToDogYears(25))
//   console.log(humanToDogYears(10))



//   2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.



function readingBook(goal){
    
    
    let readingTime =3.6
    let goalDays= goal*readingTime
    let output =`norint perskaityti ${goal} knygų per metus, vienai knygai perskaityti turėsi ${goalDays} dienas.`
    return output
}
// console.log(readingBook(10))


// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.


function daysToWeek(days){
    let week = (days/7).toFixed(2)
    let output =`${days} dienos yra ${week} savaitės.`
    return output
}
// console.log(daysToWeek(35))


// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.



function daysToYears(days){
  
    let years = days/365
    let output = `${days} dienos yra ${(Math.round(years))} metai.`
    return output
}
// console.log(daysToYears(365))



// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours(years){
    
    let hours = 8760 * years
    let output = `${years} metai turi ${hours} valandas.`
    return output
}

// console.log(yearsToHours(4))



// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function monthsToHours(months) {
    let hours = months * 30 * 24
    let output = `${months} mėnesiai turi ${hours} valandas.`
    return output
  }
  
  console.log(monthsToHours(3))
  
  // 7. Funkciją, kuri konvertuoja mėnesius į minutes:
  // 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
  // 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.
  
  function monthsToMinutes(months) {
    let minutes = months * 30 * 24 * 60
    let output = `${months} mėnesiai turi ${minutes} minutes.`
    return output
  }
  
  console.log(monthsToMinutes(2))