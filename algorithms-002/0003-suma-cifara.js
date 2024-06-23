//
// Napisati program koji od korisnika učitava nenegativan ceo broj i potom računa 
// i štampa sumu cifara tog broja.
//
// Dozvoliti visestruko izvrsavanje programa, i radi provere ispravnosti unosa.
//

function sumaCifara() {
  var ulaz = prompt("Unesite broj: ");
  var broj = parseInt(ulaz);

  if (broj < 0) {
    throw "Uneseni broj je negativan. Fuj.";
  }

  var cifre = broj.toString().split("").map(e => parseInt(e));
  var suma = cifre.reduce((a, b) => a + b, 0);

  console.log("Suma cifara broja " + broj + " je " + suma + ".");
}

function ponavljanje() {
  while (true) {
    try {
      sumaCifara();
    } catch (error) {
      console.error(error);
    }

    var odgovor = prompt("Da li zelite da ponovite? (da/ne) ");
    if (odgovor !== "da") {
      break;
    }
  }
}

ponavljanje();
