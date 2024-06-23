//
// Program na početku treba da učita prirodan broj N>100. Treba vršiti kontrolu unosa. Od učitanog
// broja N, treba generisati niz L na sledeći način: svaki element niza će dobiti vrednost druge cifre
// broja N, a niz će imati onoliko elemenata kolika je vrednost prve cifre broja N.
// Primer: N=24873; L=[4,4]. Treba omogućiti višestruko izvršavanje programa.
// 

function ucitajBroj() {
  var ulaz = prompt("Unesite broj veći od 100: ");
  var broj = parseInt(ulaz);

  if (broj < 100) {
    throw "Broj mora biti veći od 100.";
  }

  return broj;
}

function generisanje() {
  var broj = ucitajBroj();
  var cifre = broj.toString().split("").map(e => parseInt(e));

  var prvaCifra = cifre[0];
  var drugaCifra = cifre[1];

  var niz = [];
  var i = 1;

  while(i <= prvaCifra) {
    niz.push(drugaCifra);
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
