//
// Napisati program koji od korisnika učitava nenegativan ceo broj i potom 
// ispisuje najveću cifru tog broja.
//
// Dozvoliti visestruko izvrsavanje programa, i radi provere ispravnosti unosa.
//

function najvecaCifra() {
  var ulaz = prompt("Unesite broj: ");
  var broj = parseInt(ulaz);

  if (broj < 0) {
    throw "Uneseni broj je negativan. Fuj.";
  }

  var cifre = broj.toString().split("").map(e => parseInt(e));
  var sortiraneCifre = cifre.sort((a, b) => b - a);
  var najvecaCifra = sortiraneCifre[0];

  console.log("Najveca cifra broja " + broj + " je " + najvecaCifra + ".");
}

function ponavljanje() {
  while (true) {
    try {
      najvecaCifra();
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
