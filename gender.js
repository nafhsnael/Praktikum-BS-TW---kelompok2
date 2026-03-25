document.getElementById("formData").addEventListener("submit", (e) => {
    e.preventDefault();

    // Mengambil data dengan variabel yang lebih ringkas
    const nama = getNama();
    const kelas = getKelas();
    const genderElement = document.querySelector('input[name="gender"]:checked');

    // Validasi gender menggunakan 'Guard Clause'
    if (!genderElement) {
        alert("Gender belum dipilih");
        return;
    }

    // Eksekusi jika data nama dan kelas tersedia
    if (nama && kelas) {
        const { value: gender } = genderElement; // Destructuring value

        const templateHasil = `
            <div class="alert alert-success">
                <h5 class="alert-heading"><b>Hasil Input</b></h5>
                <hr>
                <p class="mb-0">
                    <strong>Nama:</strong> ${nama} <br>
                    <strong>Kelas:</strong> ${kelas} <br>
                    <strong>Gender:</strong> ${gender}
                </p>
            </div>
        `;

        document.getElementById("hasil").innerHTML = templateHasil;
    }
});
