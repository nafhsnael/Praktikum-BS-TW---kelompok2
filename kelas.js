// ambil kelas
function getKelas() {
    let kelas = document.getElementById("kelas").value.trim();

    if (kelas === "") {
        alert("Kelas belum diisi!");
        console.log("Input kelas kosong");
        return null;
    }

    console.log("Kelas:", kelas);
    return kelas;
}
