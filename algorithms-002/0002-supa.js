//
// U primordijalnoj supi ima N atoma vodonika, K atoma kiseonika i P atoma sumpora. Za jedan
// molekul sumporne kiseline (H2SO4) potrebno je dva atoma vodonika, jedan atom sumpora i četiri
// atoma kiseonika. Napisati program koji od korisnika učitava nenegativne cele brojeve N, K i P i
// potom računa i štampa maksimalan broj molekula sumporne kiseline koji se može formirati u
// takvoj primordijalnoj supi.
//

function supa() {
  var ulazVodonik = prompt("Unesite broj atoma vodonika: ");
  var ulazKiseonik = prompt("Unesite broj atoma kiseonika: ");
  var ulazSumpor = prompt("Unesite broj atoma sumpora: ");

  var vodonik = parseInt(ulazVodonik);
  var kiseonik = parseInt(ulazKiseonik);
  var sumpor = parseInt(ulazSumpor);

  if (vodonik < 2 || kiseonik < 4 || sumpor < 1) {
    throw "Nemate dovoljno atoma za sumpornu kiselinu.";
  }

  var brojMolekula = 0;

  while (vodonik >= 2 && kiseonik >= 4 && sumpor >= 1) {
    vodonik = vodonik - 2;
    kiseonik = kiseonik - 4;
    sumpor = sumpor - 1;

    brojMolekula = brojMolekula + 1;
  }

  console.log("Mozete napraviti " + brojMolekula + " molekula sumporne kiseline.");
}

function ponavljanje() {
  while (true) {
    try {
      supa();
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
