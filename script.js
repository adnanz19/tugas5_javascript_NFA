const tbody = document.getElementById("tbody");

// **Data Produk**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Power Bank", harga: 300000 },
  { id: 4, nama: "Charger HP", harga: 150000 },
  { id: 5, nama: "Charger Laptop", harga: 500000 },
  { id: 6, nama: "Kabel Data", harga: 100000 },
  { id: 7, nama: "Flash Disk", harga: 75000 }
];

//nama fungsi bebas
const eventHandler = {
    handleButtonTambah1: function() {
      alert("Produk Tablet sudah ditambahkan")
      produkList = tambahProduk(8, "Tablet", 7000000);
      tampilkanProduk();
    },

    handleButtonTambah2: function() {
      alert("Produk Headset sudah ditambahkan")
      produkList = tambahProduk(9, "Headset", 500000);
      tampilkanProduk();
    },

    handleButtonTambah3: function() {
      alert("Produk Gamepad sudah ditambahkan")
      produkList = tambahProduk(10, "Gamepad", 1000000);
      tampilkanProduk();
    },

    handleButtonHapus1: function() {
      alert("Produk 2 sudah dihapus")
      produkList = hapusProduk(2);
      tampilkanProduk();
    },

    handleButtonHapus2: function() {
      alert("Produk 5, 7, dan 1 sudah dihapus")
      produkList = hapusProduk(5, 7, 1);
      tampilkanProduk();
    }
};

let tombolTambah1 = document.getElementById("btnTambah1").addEventListener("click", eventHandler.handleButtonTambah1);
let tombolTambah2 = document.getElementById("btnTambah2").addEventListener("click", eventHandler.handleButtonTambah2);
let tombolTambah3 = document.getElementById("btnTambah3").addEventListener("click", eventHandler.handleButtonTambah3);
let tombolHapus1 = document.getElementById("btnHapus1").addEventListener("click", eventHandler.handleButtonHapus1);
let tombolHapus2 = document.getElementById("btnHapus2").addEventListener("click", eventHandler.handleButtonHapus2);

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  let produkBaru = [{
    id: id, 
    nama: nama, 
    harga: harga
  }]

  return [...produkList, ...produkBaru];
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...idHapus) {
  return produkList.filter((produk) => !idHapus.includes(produk.id));
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  tbody.innerHTML = "";

  produkList.forEach((item) => {
    const {id, nama, harga } = item;
    const tr = document.createElement("tr");

    const tId = document.createElement("td");
    const tNama = document.createElement("td");
    const tHarga = document.createElement("td");

    tId.textContent = id;
    tNama.textContent = nama;
    tHarga.textContent = harga;

    tr.appendChild(tId);
    tr.appendChild(tNama);
    tr.appendChild(tHarga);

    tbody.appendChild(tr);
  });
}

tampilkanProduk();