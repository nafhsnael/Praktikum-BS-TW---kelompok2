// ambil kelas
function getKelas() {
    let kelas = document.getElementById("kelas").value.trim();

    if(kelas === ""){
        alert("Kelas belum diisi 😠");
        return null;
    }

    return kelas;
}