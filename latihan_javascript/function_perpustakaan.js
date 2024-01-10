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

function tampilkanStatusBuku(buku) {
    if (buku.readingStatus) {
        console.log(`Sudah membaca '${buku.title}' oleh ${buku.author}.`);
    } else {
        console.log(`Anda masih perlu membaca '${buku.title}' oleh ${buku.author}.`);
    }
}

for (let i = 0; i < library.length; i++) {
    tampilkanStatusBuku(library[i]);
}
