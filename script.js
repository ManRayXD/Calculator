function tampilkannilaibutton(value) {
    document.getElementById("display").value += value;
}

function Hasil() {
    let HasilPerhitungan = eval(document.getElementById("display").value);
    document.getElementById("display").value = HasilPerhitungan;
}

function Hapus() {
    document.getElementById("display").value = '';
}

