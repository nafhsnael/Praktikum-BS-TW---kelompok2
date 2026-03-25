document.getElementById("formData").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = getNama();
    let kelas = getKelas();
    let gender = document.querySelector('input[name="gender"]:checked');

    if(!gender){
        alert("Gender belum dipilih ");
        return;
    }

    if(nama && kelas){
        document.getElementById("hasil").innerHTML = `
            <div class="alert alert-success">
                <b>Hasil Input</b><br>
                Nama: ${nama} <br>
                Kelas: ${kelas} <br>
                Gender: ${gender.value}
            </div>
        `;
    }
});