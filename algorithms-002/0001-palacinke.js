//
// Za jednu palacinku potrebno je 2 jaja, 100g brasna i 200ml mleka.
// Napisati program koji ce izracunati koliko palacinki mozemo napraviti sa
// zadatom kolicinom jaja, brasna i mleka.
//
//  Dozvoli visestruko izvrsavanje programa, i radi provere ispravnosti unosa.
//
// Primer:
//  - ulaz: 10 jaja, 500g brasna, 1000ml mleka
//  - izlaz: 5 palacinki
//
//  - ulaz: 20 jaja, 1000g brasna, 2000ml mleka
//  - izlaz: 10 palacinki
//

function palacinke() {
  var ulazJaja = prompt("Unesite broj jaja: ");
  var ulazBrasno = prompt("Unesite broj grama brasna: ");
  var ulazMleko = prompt("Unesite broj mililitara mleka: ");

  var jaja = parseInt(ulazJaja);
  var brasno = parseInt(ulazBrasno);
  var mleko = parseInt(ulazMleko);

  if (jaja < 2 || brasno < 100 || mleko < 200) {
    throw "Nemate dovoljno sastojaka za palacinke.";
  }

  var brojPalacinki = 0;

  while (jaja >= 2 && brasno >= 100 && mleko >= 200) {
    jaja = jaja - 2;
    brasno = brasno - 100;
    mleko = mleko - 200;

    brojPalacinki = brojPalacinki + 1;
  }

  console.log("Mozete napraviti " + brojPalacinki + " palacinki.");
}

function ponavljanje() {
  while (true) {
    try {
      palacinke();
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
