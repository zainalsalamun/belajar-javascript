function getNilai(nilai) {
    let hasil;
  
    if (nilai >= 90 && nilai <= 100) {
      hasil = "A";
    } else if (nilai >= 80 && nilai < 90) {
      hasil = "B";
    } else if (nilai >= 70 && nilai < 80) {
      hasil = "C";
    } else if (nilai >= 60 && nilai < 70) {
      hasil = "D";
    } else if (nilai >= 0 && nilai < 60) {
      hasil = "E";
    } else {
      hasil = "Nilai tidak valid"; 
    }

    return hasil;
  }
  
  let nilaiMahasiswa = 85;
  let hasilPenilaian = getNilai(nilaiMahasiswa);
  
  console.log(`Nilai mahasiswa ${nilaiMahasiswa} mendapatkan nilai: ${hasilPenilaian}`);
  