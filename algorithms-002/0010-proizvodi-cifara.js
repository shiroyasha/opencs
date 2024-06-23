//
// Napisati program koji rešava sledeći problem. Treba učitati dvocifreni broj. Zatim treba učitati
// niz trocifrenih brojeva čija dimenzija je prethodno učitani broj. Izračunati i odštampati koliko
// elemenata niza zadovoljava uslov da im je proizvod cifara manji od 15. Treba vršiti kontrolu
// unosa i omogućiti višestruko izvršavanje programa na zahtev korisnika.
//

function ucitajBroj() {
  var ulaz = prompt("Unesite dvocifreni broj: ");
  var broj = parseInt(ulaz);

  if (broj < 10 || broj > 99) {
    throw "Broj mora biti dvocifren.";
  }

  return broj;
}

function ucitajNiz() {
  var n = ucitajBroj();
  var i = 1;
  var niz = [];

  while (i <= n) {
    var ulaz = prompt("Unesite trocifreni broj: ");
    var broj = parseInt(ulaz);

    if (broj < 100 || broj > 999) {
      throw "Broj mora biti trocifren.";
    }

    niz.push(broj);
    i = i + 1;
  }

  return niz;
}

function proizvodiManjiOd15() {
  var niz = ucitajNiz();
  
  var count = 0;
  var i = 0;

  while (i < niz.length) {
    var cifre = niz[i].toString().split("").map(e => parseInt(e));
    var proizvod = cifre.reduce((acc, e) => acc * e);

    if (proizvod < 15) {
      count = count + 1;
    }

    i = i + 1;
  }

  console.log("Broj elemenata niza sa proizvodom cifara manjim od 15: " + count);
}

function ponavljanje() {
  while (true) {
    try {
      proizvodiManjiOd15();
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

