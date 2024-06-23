//
// Napisati program koji rešava sledeći problem. Treba učitati petocifreni broj (broj). Zatim treba
// generisati i odštampati niz (cifre) čiji su elementi parne cifre učitanog broja. Primer: broj=23459,
// cifre=[2,4]. Ukoliko učitani broj nema parnih cifara, treba odštampati odgovarajuću poruku
// ("Nema parnih cifara"). U svim učitavanjima treba vršiti kontrolu unosa. Takođe treba omogućiti
// višestruko izvršavanje programa na zahtev korisnika.
//

function ucitajBroj() {
  var ulaz = prompt("Unesite petocifreni broj: ");
  var broj = parseInt(ulaz);

  if (broj < 10000 || broj > 99999) {
    throw "Broj mora biti petocifren.";
  }

  return broj;
}

function parneCifre() {
  var broj = ucitajBroj();
  var cifre = broj.toString().split("").map(e => parseInt(e));
  var parne = cifre.filter(e => e % 2 === 0);

  if (parne.length === 0) {
    console.log("Nema parnih cifara.");
  } else {
    console.log(parne);
  }
}

function ponavljanje() {
  while (true) {
    try {
      parneCifre();
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
