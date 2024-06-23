//
// Napisati program koji učitava dimenziju niza 3 <= K <= 10, a zatim 
// i niz jednocifrenih prirodnih brojeva L zadate dimenzije K, a zatim 
// od zadatog niza L generiše i štampa prirodan broj N spajajući elemente
// niza veće od 3 s leva na desno. 
//
// Ukoliko nema elemenata niza većih od 3 odštampati odgovarajuću poruku.
//
// Primer 1: Ako je K=4; L=[5,3,4,6]; N=546;
// Primer 2: Ako je K=3; L=[1,2,3]; U nizu nema cifara većih od 3.
//

function ucitajDuzinuNiza() {
  var ulaz = prompt("Unesite dimenziju niza: ");
  var broj = parseInt(ulaz);

  if (broj < 3 || broj > 10) {
    throw "Dimenzija niza mora biti izmedju 3 i 10.";
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

    if (broj < 0 || broj > 9) {
      throw "Element niza mora biti jednocifren prirodan broj.";
    }

    niz.push(broj);
    i = i + 1;
  }

  return niz;
}

function spajanje() {
  var niz = ucitajNiz();
  var nizVeceOd3 = niz.filter(e => e > 3);

  if (nizVeceOd3.length === 0) {
    console.log("U nizu nema cifara većih od 3.");
    return;
  }

  //
  // join() metoda niza spaja elemente niza u jedan string
  // primer: [5, 4, 6].join("") => "546"
  // 

  var spojeno = nizVeceOd3.join("");
  console.log("Spojeni broj je: " + spojeno);
}

function ponavljanje() {
  while (true) {
    try {
      spajanje();
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
