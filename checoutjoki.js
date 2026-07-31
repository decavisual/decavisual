const checkoutBtnJoki = document.getElementById("checkoutBtnJoki");

if (checkoutBtnJoki) {
  checkoutBtnJoki.addEventListener("click", () => {
    const nama = document.getElementById("nama").value;
    const kampus = document.getElementById("kampus").value;
    const paket = document.getElementById("paket").value;
    const materi = document.getElementById("materi").value;
    const produk = document.getElementById("produk").value;
    const catatan = document.getElementById("catatan").value;

    const template = window.selectedTemplate || "-";

    const pesan = `Halo Kak admin Decavisual

Saya ingin melakukan pemesanan Joki PPT.

Nama : ${nama}
Kampus / Company : ${kampus}
Paket : ${paket}
Produk : ${produk}
Materi : ${materi}
Template : ${template}
Catatan : ${catatan || "-"}

tolong kirim nomor rekening agar segera saya payement ya kak.`;

    const nomorWA = "6287884240665";

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
  });
}
