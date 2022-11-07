const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAwal < nilaiAkhir) {
    if (dataArray.length <= 5) {
      console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    } else {
      const filtered = dataArray.filter(
        (element) => element >= nilaiAwal && element <= nilaiAkhir
      );

      filtered.length <= 0
        ? console.log("Nilai tidak ditemukan")
        : console.log(filtered.sort((a, b) => a - b));
    }
  } else {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }
};

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(4, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
