//
// Napisati program koji učitava prirodan broj N, a zatim izračunava i štampa drugu po redu cifru
// (C) gledano sa leve strane broja N, koja je veća od 3. Ukoliko broj N nema dve cifre koje su veće
// od 3 odštampati odgovarajuću poruku. Primer: Ako je N=7326; tada je C=6.
//

function cifraVecaOd3() {
  var ulaz = prompt("Unesite broj: ");
  var broj = parseInt(ulaz);

  if (broj < 10) {
    throw "Broj mora imati bar dve cifre.";
  }

  var cifre = broj.toString().split("").map(e => parseInt(e));
  var cifreVeceOd3 = cifre.filter(e => e > 3);

  if (cifreVeceOd3.length < 2) {
    throw "Broj nema bar dve cifre veće od 3.";
  }

  var drugaCifra = cifreVeceOd3[1];
  console.log("Druga cifra veća od 3 je: " + drugaCifra);
}

function ponavljanje() {
  while (true) {
    try {
      cifraVecaOd3();
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
