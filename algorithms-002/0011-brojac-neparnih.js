//
// Napisati program koji rešava sledeći problem. Treba učitati petocifreni broj (broj). Zatim treba
// generisati i odštampati niz (cifre) čiji su elementi neparne cifre učitanog broja. Primer:
// broj=23459, cifre=[3,5,9]. Ukoliko učitani broj nema neparnih cifara, treba odštampati
// odgovarajuću poruku ("Nema neparnih cifara"). U svim učitavanjima treba vršiti kontrolu unosa.
// Takođe treba omogućiti višestruko izvršavanje programa na zahtev korisnika.
//
//

function ucitajBroj() {
  var ulaz = prompt("Unesite petocifreni broj: ");
  var broj = parseInt(ulaz);

  if (broj < 10000 || broj > 99999) {
    throw "Broj mora biti petocifren.";
  }

  return broj;
}

function neparneCifre() {
  var broj = ucitajBroj();
  var cifre = broj.toString().split("").map(e => parseInt(e));
  var neparne = cifre.filter(e => e % 2 !== 0);

  if (neparne.length === 0) {
    console.log("Nema neparnih cifara.");
  } else {
    console.log(neparne);
  }
}

function ponavljanje() {
  while (true) {
    try {
      neparneCifre();
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
