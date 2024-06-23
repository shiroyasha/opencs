//
// Napisati program koji od korisnika učitava nenegativan ceo broj i potom 
// ispisuje najmanju cifru tog broja.
//
// Dozvoliti visestruko izvrsavanje programa, i radi provere ispravnosti unosa.
//

function najmanjaCifra() {
  var ulaz = prompt("Unesite broj: ");
  var broj = parseInt(ulaz);

  if (broj < 0) {
    throw "Uneseni broj je negativan. Fuj.";
  }

  var cifre = broj.toString().split("").map(e => parseInt(e));
  var sortiraneCifre = cifre.sort((a, b) => a - b);
  var najmanjaCifra = sortiraneCifre[0];

  console.log("Najmanja cifra broja " + broj + " je " + najmanjaCifra + ".");
}

function ponavljanje() {
  while (true) {
    try {
      najmanjaCifra();
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
