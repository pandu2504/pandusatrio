// Buat array dengan 100 nilai acak antara 1 dan 50
const array = [];
for (let i = 0; i < 100; i++) {
  const nilai = Math.floor(Math.random() * 50) + 1;
  array.push(nilai);
}

// Buat array genap dan ganjil
const arrayGenap = [];
const arrayGanjil = [];

for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    arrayGenap.push(array[i]);
  } else {
    arrayGanjil.push(array[i]);
  }
}

// Hitung Min, Max, Total, dan Rata-rata pada array genap
const minGenap = Math.min(...arrayGenap);
const maxGenap = Math.max(...arrayGenap);
const totalGenap = arrayGenap.reduce((acc, nilai) => acc + nilai, 0);
const rataRataGenap = totalGenap / arrayGenap.length;

// Hitung Min, Max, Total, dan Rata-rata pada array ganjil
const minGanjil = Math.min(...arrayGanjil);
const maxGanjil = Math.max(...arrayGanjil);
const totalGanjil = arrayGanjil.reduce((acc, nilai) => acc + nilai, 0);
const rataRataGanjil = totalGanjil / arrayGanjil.length;

// Bandingkan hasil
const perbandingan = {
  Min: minGenap > minGanjil ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil",
  Max: maxGenap > maxGanjil ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil",
  Total: totalGenap === totalGanjil ? "Total memiliki nilai yang sama pada kedua array" : "Total berbeda antara array genap dan ganjil",
  "Rata-rata": rataRataGenap > rataRataGanjil ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil",
};

// Output
console.log("Array dengan jumlah index 100:", array);
console.log("Array genap dengan jumlah index 50:", arrayGenap);
console.log("Array ganjil dengan jumlah index 50:", arrayGanjil);
console.log("Min, Max, Total, Rata-rata pada array genap:");
console.log("Min:", minGenap);
console.log("Max:", maxGenap);
console.log("Total:", totalGenap);
console.log("Rata-rata:", rataRataGenap);
console.log("Min, Max, Total, Rata-rata pada array ganjil:");
console.log("Min:", minGanjil);
console.log("Max:", maxGanjil);
console.log("Total:", totalGanjil);
console.log("Rata-rata:", rataRataGanjil);
console.log("Perbandingan nilai:");
console.log(perbandingan);