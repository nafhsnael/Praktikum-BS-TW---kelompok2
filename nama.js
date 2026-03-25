// ambil nama
function getNama() {
    const inputNama = document.getElementById("nama").value.trim();

    if (inputNama.length === 0) {
        alert("Silakan isi nama terlebih dahulu");
        return null;
    }

    return inputNama;
}
