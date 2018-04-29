/* Zadatak3:
 Definisati niz nekoliko drzava. 
 Iterirati kroz niz jednom od petlji koje smo radili.
 Ukoliko je u nizu drzava Grcka, ispisati u konozoli: Fica je bio u Grckoj. 
 Ukoliko se Grcka ne nalazi u nasem nizu, ispisati: Fico, idi u Grcku. */

var drzave = ['Albanija', 'Indonezija', 'Finska', 'Grcka'];

for (var i = 0; i < drzave.length; i++) {
    if (drzave[i] === 'Grcka') {
        console.log('Fica je bio u ' + drzave[i] + '-oj.');
    } else {
        console.log('Fico, idi u Grcku');
    }
}

// drugo resenje
    if (drzave.indexOf('Grcka') >= 0) {
        console.log('Fica je bio u Grckoj');
    } else {
        console.log('Fico, idi u Grcku');
    }

    // ili:

    if (drzave.indexOf('Grcka') < 0) {
        console.log('Fico, idi u Grcku');
    } else {
        console.log('Fica je bio u Grckoj');
    }


