//
// Napisati program koji od korisnika učitava prirodan broj N, 5≤N≤1000, a zatim i niz L od N
// prirodnih brojeva. Vršiti kontrolu unosa u svim učitavanjima. Među članovima niza pronaći i
// ispisati one koji su deljivi prvom cifrom broja N (gledano sleva na desno). Npr. za N=8 i
// L=[2,18,32,45,17,64,12,56] ispisuju se 32, 64 i 56. Treba omogućiti višestruko izvršavanje
// programa na zahtev korisnika.
//

function ucitajBroj() {
  var ulaz = prompt("Unesite prirodan broj N (5<=N<=1000): ");
  var broj = parseInt(ulaz);

  if (broj < 5 || broj > 1000) {
    throw "Broj mora biti izmedju 5 i 1000.";
  }

  return broj;
}

function ucitajNiz() {
  var n = ucitajBroj();
  var i = 1;
  var niz = [];

  while (i <= n) {
    var ulaz = prompt("Unesite prirodan broj: ");
    var broj = parseInt(ulaz);

    if (broj <= 0) {
      throw "Broj mora biti pozitivan.";
    }

    niz.push(broj);
    i = i + 1;
  }

  return niz;
}

function deljiviPrvomCifrom() {
  var niz = ucitajNiz();
  var prvaCifra = niz[0].toString().split("")[0];

  var deljivi = niz.filter(e => e % prvaCifra === 0);
  console.log(deljivi);
}

function ponavljanje() {
  while (true) {
    try {
      deljiviPrvomCifrom();
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
