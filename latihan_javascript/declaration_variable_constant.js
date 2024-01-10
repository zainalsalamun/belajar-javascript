const PI = Math.PI;

function getLuasKel(r) {
  let luas = PI * Math.pow(r, 2);

  let keliling = 2 * PI * r;

  return {
    luas: luas,
    keliling: keliling
  };
}

let jariJariLingkaran = 5;
let hasilPerhitungan = getLuasKel(jariJariLingkaran);

console.log(`Luas lingkaran dengan jari-jari ${jariJariLingkaran}: ${hasilPerhitungan.luas}`);
console.log(`Keliling lingkaran dengan jari-jari ${jariJariLingkaran}: ${hasilPerhitungan.keliling}`);
