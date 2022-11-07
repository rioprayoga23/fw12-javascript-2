//* 1. find()
// ? find merupakan merupakan build in function dari array, dimana dia akan mencari value dari sebuah array berdasarkan kondisi tertentu. walaupun nantinya akan ada lebih dari satu value yang di hasilkan, yang diambil tetap value yang pertama sesuai dengan kondisi. dan return dari find ini adalah sesuai dengan value yang di dapat.

const array1 = [5, 11, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);
console.log(typeof found);

//* 2. forEach()
//? forEach merupakan build in function dari array, dimana dia akan menjalankan sebuah fungsi yang didalamnya terdapat sebuah parameter yang merepresentasikan setiap element dari sebuah array. Return value dari forEach adalah undefined

const array2 = ["a", "b", "c"];
array2.forEach((element) => console.log(element));

//* 3. pop()
//? forEach merupakan build in function dari array, dimana dia akan menghapus elemen terakhir dari sebuah array dan secara otomatis mengubah panjang dari sebuah array. Dan akan mengmbalikan element array yang di hapus;

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop());
console.log(plants);

//* 4. includes()
//? includes merupakan build in function dari string, dimana dia akan mencari apakah didalam string terdapat huruf-huruf tertentu atau tidak. Return dari includes adalah boolean.

const str = "i love javascript";
console.log(str.includes("love"));

//* 5. toLowerCase()
//? toLowerCase merupakan build in function dari string, dimana dia akan merubah isi string menjadi huruf kecil semua.

const kataBesar = "BANDUNG";
console.log(kataBesar.toLowerCase());

//* 6. toUpperCase()
//? toUpperCase merupakan build in function dari string, dimana dia akan merubah isi string menjadi huruf besar semua.

const kataKecil = "bandung";
console.log(kataKecil.toUpperCase());

//* 7. parseInt()
//? parseInt merupakan build in function dari number, dimana dia akan merubah sebuah string menjadi number.

let num = "310";
let newNumber = Number.parseInt(num);
console.log(typeof num);
console.log(typeof newNumber);

//* 8. concat()
//? concat merupakan build in function dari array, dimana dia akan menggabungkan dua atau lebih array. concat tidak merubah array yang sudah ada, tapi dia me-return sebuah array baru

const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//* 9. push()
//? concat merupakan build in function dari array, dimana dia akan menambahkan sebuah element baru kedalam sebuah array. retrun dari push adalah jumlah dari element array.

const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
console.log(count);
console.log(animals);

//* 10. toString()
//? toString merupakan build in function dari boolean, dimana dia akan merubah value dari sebuah boolean menjadi string.

const bool = true;
console.log(bool);
console.log(bool.toString());
