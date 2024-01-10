var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: true
    },
];

function urutkanObjekBerdasarkanNama(objekPerpustakaan) {
    return objekPerpustakaan.sort((a, b) => a.title.localeCompare(b.title));
}

const perpustakaanUrut = urutkanObjekBerdasarkanNama(library);

console.log("Objek perpustakaan setelah diurutkan berdasarkan nama buku:");
console.log(perpustakaanUrut);
