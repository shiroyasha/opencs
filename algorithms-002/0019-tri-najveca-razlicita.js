//
// Napisati program koji u£itava dimenziju niza 1 ≤ K ≤ 50, a zatim i niz prirodnih
// brojeva manjih od 10000 zadate dimenzije K (vr²iti kontrolu unosa). Potom je
// potrebno prona¢i i ispisati na ekranu tri najve¢a razli£ita elementa niza.
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

    if (broj < 0 || broj >= 10000) {
      throw "Element niza mora biti prirodan broj manji od 10000.";
    }

    niz.push(broj);
    i = i + 1;
  }

  return niz;
}

function triNajvecaRazlicita() {
  var niz = ucitajNiz();

  var skup = new Set(niz);
  var nizBezDuplikata = Array.from(skup);

  var sortiraniNiz = nizBezDuplikata.sort((a, b) => b - a);

  if (sortiraniNiz.length < 3) {
    console.log("Niz ima manje od 3 elementa.");
    return;
  }

  var najveci = sortiraniNiz[0];
  var drugiNajveci = sortiraniNiz[1];
  var treciNajveci = sortiraniNiz[2];

  console.log("Tri najveca razlicita elementa niza su: ");
  console.log(najveci);
  console.log(drugiNajveci);
  console.log(treciNajveci);
}

triNajvecaRazlicita();
