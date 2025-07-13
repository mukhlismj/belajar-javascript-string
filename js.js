// let nama= "Mukhlis"
// let umur= "30 tahun"
// let noHp= "0822-6062-4622"

//Mengenal propeerti
// .length > menghitung jumlah karakter
// console.log(noHp.length);

//mengakses karakter dengan index, ini seperti array
let sapa = "halo kawan"
console.log(sapa[1]); // index mulai menghitung dari 0. hasilnya = a
console.log(sapa[2]); // hasilnya = l

//Method .toUpperCase() dam toLowerCase()
let kalimat = "Belajar Javascript"
console.log(kalimat.toUpperCase()); // ini akan mengubah teks menjadi huruf besar semua
console.log(kalimat.toLowerCase()); // ini akan mengubah teks menjadi huruf kecil semua

//Menghapus spasi awal dan akhir menggunakan method trim()
let input = "    halo    bagaimana kabar  mu saat ini     !!"
console.log(input.trim());

//Cek kata tertentu dalam sebuah kalimat menggunakan methode includes()
let cekKata = "Saya sedang belajar javascript dasar"
console.log(cekKata.includes("belajar")); // ini sensitif terhadap huruf besar dan kecil

// Ganti kata terntentu dengan method replace()
let gantiKata = "apa kabarmu hari ini";
console.log(gantiKata.replace("hari ini", "bro!!")); // ini sensitif juga 

//Memecah string menjadi array
let buah = "apel, jeruk, mangga, alpukat";
console.log(buah.split(",")); // ini akan mengubah menjadi arrya

let ubahKeArray = buah.split(","); // tampung dulu dalam sebuah variabel
console.log(ubahKeArray[2]); // tampilkan buah(array) yang di inginkan. Hasilnya "mangga"

//method memotong bagian string menggunakan slice()
let potongString = "Belajar Javscript dasar";
console.log(potongString.slice(8,17)); // harus dilebihkan 1 karakter

// Interpolasi : Gabungin sring dan Variabel
let namaKu = "Mukhlis";
let alamat = "aceh";
let salam = `Halo, Nama saya ${namaKu}, alamat ${alamat}.`; // menggunakan backtik
console.log(salam);

// menggabungkan sring menggunakan "+"
let depan    = "Halo";
let belakang = "dunia";
console.log(depan +" ", belakang);

// menggunakan concat
let hasilGabungan = depan.concat(" ", belakang);
console.log(`ini adalah hasil menggunakan "concat()" = ${hasilGabungan}`);

//Loping String
let teks = "halo apa kabar"
for (let i = 0; i < teks.length; i++){
  console.log(teks[i]);
};

// cara buat tanda kutip dalam string
let ucapan = `dia bilang: "Terima kasih"`;
console.log(ucapan);

// atau bisa juga
let ucapan2 = "aku jawab \"baik, sama-sama\""; //ini namanya escape character
console.log(ucapan2);

//KASUS
// Validasi nama pengguna
// let nama = prompt("Masukan Nama Anda:");
// if (nama.trim() === ""){
//   alert("Nama tidak boleh kosong!");
// }

// Menyapa pengguna
let halo = "Mukhlis";
console.log(`Halo, ${halo}`);




