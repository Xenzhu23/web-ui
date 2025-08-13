function saveProfile() {
    // 1. Ambil data dari setiap input field
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const planet = document.getElementById('planet').value;

    // 2. Buat objek untuk menyimpan semua data
    const profileData = {
        name: name,
        email: email,
        dob: dob,
        planet: planet
    };

    // 3. Simpan objek data ke localStorage
    // Menggunakan JSON.stringify() untuk mengubah objek menjadi string
    localStorage.setItem('userProfile', JSON.stringify(profileData));

    // Opsional: Cek di console apakah data sudah tersimpan
    console.log('Data profil berhasil disimpan:', profileData);
    
    // 4. Arahkan pengguna ke halaman lain setelah data berhasil disimpan
    // Ganti 'halaman-selesai.html' dengan nama file tujuan Anda
    window.location.href = 'halaman-selesai.html';
}

// Fungsi untuk menampilkan avatar yang dipilih pengguna secara instan
document.getElementById('avatarUpload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById('avatarPreview');
        output.src = reader.result;
    };
    // Baca file yang dipilih oleh pengguna
    reader.readAsDataURL(event.target.files[0]);
});
