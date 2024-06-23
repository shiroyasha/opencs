//
// Program treba da učita petocifreni prirodan broj N. Treba vršiti kontrolu unosa. Od učitanog broja
// N, treba generisati niz L na sledeći način: svaki elemenat niza će dobiti vrednost minimalne cifre
// broja N, a niz će imati onoliko elemenata kolika je vrednost maksimalne cifre broja N.
// Primer: N=24873; L=[2,2,2,2,2,2,2,2]. Treba omogućiti višestruko izvršavanje programa.
//

function ucitajBroj() {
  var ulaz = prompt("Unesite petocifreni broj: ");
  var broj = parseInt(ulaz);

  if (broj < 10000 || broj > 99999) {
    throw "Broj mora biti petocifren.";
  }

  return broj;
}

function minimalnaCifra(broj) {
  var cifre = broj.toString().split("").map(e => parseInt(e));
  var sortiraneCifre = cifre.sort((a, b) => a - b);

  return sortiraneCifre[0];
}

function maximalnaCifra(broj) {
  var cifre = broj.toString().split("").map(e => parseInt(e));
  var sortiraneCifre = cifre.sort((a, b) => b - a);

  return sortiraneCifre[0];
}

function generisanje() {
  var broj = ucitajBroj();

  var minCifra = minimalnaCifra(broj);
  var maxCifra = maximalnaCifra(broj);

  var niz = []
  var i = 1;

  while(i <= maxCifra) {
    niz.push(minCifra);
    i = i + 1;
  }

  console.log(niz);
}

function ponavljanje() {
  while (true) {
    try {
      generisanje();
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
