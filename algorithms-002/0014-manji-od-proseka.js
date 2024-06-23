//
// Napisati program koji rešava sledeći problem. Treba učitati petocifreni broj (broj). Zatim
// treba generisati i odštampati niz (cifre) čiji su elementi cifre učitanog broja koje su manje od
// prosečne vrednosti svih cifara učitanog broja. Primer: broj=93542, cifre=[3,4,2] (jer je prosek
// 4.6). Kod učitavanja broja treba vršiti kontrolu unosa. Takođe treba omogućiti višestruko
// izvršavanje programa na zahtev korisnika.
//

function ucitajBroj() {
  var ulaz = prompt("Unesite petocifreni broj: ");
  var broj = parseInt(ulaz);

  if (broj < 10000 || broj > 99999) {
    throw "Broj mora biti petocifren.";
  }

  return broj;
}

function ucitajNiz() {
  var broj = ucitajBroj();
  var cifre = broj.toString().split("").map(e => parseInt(e));

  var sumaCifara = cifre.reduce((acc, e) => acc + e);
  var prosek = sumaCifara / cifre.length;

  var manjeOdProseka = cifre.filter(e => e < prosek);

  console.log(manjeOdProseka);
}

function ponavljanje() {
  while (true) {
    try {
      ucitajNiz();
    } catch (e) {
      console.error(e);
    }

    var odgovor = prompt("Da li zelite da ponovite? (da/ne) ");
    if (odgovor !== "da") {
      break;
    }
  }
}

ponavljanje();
