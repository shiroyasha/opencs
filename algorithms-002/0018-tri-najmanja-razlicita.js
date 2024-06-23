//
// Napisati program koji u£itava dimenziju niza 1 ≤ K ≤ 50, a zatim i niz prirodnih
// brojeva manjih od 10000 zadate dimenzije K (vr²iti kontrolu unosa). Potom je
// potrebno prona¢i i ispisati na ekranu tri najmanja razli£ita elementa niz
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

function triNajmanjaRazlicita() {
  var niz = ucitajNiz();

  var skup = new Set(niz);
  var bezDuplikata = Array.from(skup);
  var sortirani = bezDuplikata.sort((a, b) => a - b);

  var najmanji = sortirani[0];
  var drugiNajmanji = sortirani[1];
  var treciNajmanji = sortirani[2];

  console.log(najmanji, drugiNajmanji, treciNajmanji);
}

function ponavljanje() {
  while (true) {
    try {
      triNajmanjaRazlicita();
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
