function getArea(panjang, lebar) {
    let luas = panjang * lebar;
    return luas;
  }
  
  function getPerimeter(panjang, lebar) {
    let keliling = 2 * (panjang + lebar);
    return keliling;
  }
  
  let panjangPersegiPanjang = 5;
  let lebarPersegiPanjang = 3;
  
  let luas = getArea(panjangPersegiPanjang, lebarPersegiPanjang);
  let keliling = getPerimeter(panjangPersegiPanjang, lebarPersegiPanjang);
  
  console.log("Luas persegi panjang:", luas);
  console.log("Keliling persegi panjang:", keliling);
  