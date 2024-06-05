// Ucitaj broj N, i nakon toga N brojeva. Ispisi 2 najveca razlicita broja.

function ucitajBroj() {
  var ulaz = prompt("Koliko brojeva zelis da ucitas: ");
  var broj = parseInt(ulaz, 10)
  
  return broj
}

function ucitajNizBrojeva(n) {
  var niz = [];
  
  var i = 0;
  while(i < n) {
    var ulaz = prompt("Unesi broj: ")
    var broj = parseInt(ulaz, 10)
    
    niz.push(broj)
    i = i + 1
  }
  
  return niz
}

// Drugi pristup
function dvaNajveca1(niz) {
  // Sortiramo niz od najveceg do najmanjeg
  niz = niz.sort((a, b) => a - b)
  niz = niz.reverse()
  
  var najveci = niz[0]
  
  // sada izbacijum najveci element iz niza
  niz = niz.filter((el) => el !== najveci)
  
  // posto je najveci sad izbacen, drugi najveci je sad na kraju
  var drugiNajveci = niz[0]
  
  return [najveci, drugiNajveci]
}

// Treci pristup
function dvaNajveca2(niz) {
  // Pretvarano niz u skup da uklonimo duplikate
  // Setimo se iz matematike: Skup nema druplikate, Niz ima
  var skup = new Set(niz)
    
  // Sada vratimo nazad u niz
  niz = Array.from(skup)
    
  // sada opet sortiramo
  niz = niz.sort((a, b) => a - b)
  niz = niz.reverse()
  
  return [niz[0], niz[1]]
}

var n = ucitajBroj()
var niz = ucitajNizBrojeva(n)
var rez = dvaNajveca1(niz)

// Sada samo ispis rezultata
console.log("Najveci broj je:")
console.log(rez[0])
console.log("Drugi najveci broj je")
console.log(rez[1])
