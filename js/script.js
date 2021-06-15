// 1. Creare un array di oggetti. Ogni oggetto descriverà una 
// bici da 
// corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// 2. Crea un array di 10 oggetti che rappresentano una zucchina,
//  indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// 3. Crea un array di 10 oggetti che rappresentano una zucchina.
//  Dividi in due array separati le zucchine che misurano meno o più
//   di 15cm. Infine stampa separatamente quanto pesano i due gruppi
//    di zucchine



        //   ESERCIZIO 1
//  Creare un array di oggetti. Ogni oggetto descriverà una 
// bici da 
// corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// creo un array di oggetti

 var Bici = [
    {
    'nome' : 'x2000',
     'peso' : 8

    },
    {
     'nome' : 'fusion',
     'peso' : 7

    },
    {
     'nome' : 'sonic',
     'peso' : 5

    }


 ];

//  stampo la bici con peso minore

 var pesoMin = Bici[0]

 for( var i = 1; i < Bici.length; i++){
     if(Bici[i].peso < pesoMin.peso){
         pesoMin = Bici[i]
     }
 }
 console.log(pesoMin)