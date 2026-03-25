// ambil nama
function getNama() {
    let nama = document.getElementById("nama").value.trim();

    if(nama === ""){
        alert("Nama belum diisi 😠");
        return null;
    }

    return nama;
}