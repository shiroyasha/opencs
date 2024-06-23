//
// Napisati program koji učitava dimenziju niza 1≤K≤50, a zatim i niz prirodnih brojeva manjih od
// 10000 zadate dimenzije K (vršiti kontrolu unosa). Potom je potrebno ispisati na ekranu sve
// elemente niza čiji je zbir cifara dvocifren broj.
//

function ucitajDuzinuNiza() {
  var ulaz = prompt("Unesite dimenziju niza: ");
  var broj = parseInt(ulaz);

  if (broj < 1 || broj > 50) {
    throw "Dimenzija niza mora biti izmedju 1 i 50.";
  }

  return broj;
}

function ucitajNiz() {
  var n = ucitajDuzinuNiza();
  var i = 1;
  var niz = [];

  while (i <= n) {
    var ulaz = prompt("Unesite element niza: ");
    var broj = parseInt(ulaz);

    if (broj < 0 || broj > 9999) {
      throw "Element niza mora biti manji od 10000.";
    }

    niz.push(broj);
    i = i + 1;
  }

  return niz;
}

function zbirDvocifren() {
  var niz = ucitajNiz();

  var i = 0;
  while (i < niz.length) {
    var broj = niz[i];
    var cifre = broj.toString().split("").map(e => parseInt(e));
    var zbir = cifre.reduce((acc, e) => acc + e);

    if (zbir >= 10 && zbir <= 99) {
      console.log(broj);
    }

    i = i + 1;
  }
}

function ponavljanje() {
  while (true) {
    try {
      zbirDvocifren();
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
