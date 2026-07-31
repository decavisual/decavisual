const checkoutBtn = document.getElementById("checkoutBtn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

        const nama = document.getElementById("nama").value;
        const kampus = document.getElementById("kampus").value;
        const paket = document.getElementById("paket").value;
        const produk = document.getElementById("produk").value;
        const catatan = document.getElementById("catatan").value;

        const template = window.selectedTemplate || "-";

        const pesan = `Halo Kak admin Decavisual

Saya ingin melakukan pemesanan template.

Nama : ${nama}
Kampus / Company : ${kampus}
Paket : ${paket}
Produk : ${produk}
Template : ${template}
Catatan : ${catatan || "-"}

Terima kasih.`;

        const nomorWA = "6287884240665";

        const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

        window.open(url, "_blank");

    });

}