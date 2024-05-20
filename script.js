// script 'Katik'
function LuasSegitiga() {
    let alas = document.getElementById("base").value
    let tinggi = document.getElementById("height").value

    let hasilluas = 0.5 * parseInt(alas) * parseInt(tinggi)

    document.write('Hasilnya adalah ' + hasilluas)
}

function KelilingSegitiga() {
    let sisi1 = document.getElementById("side-a").value
    let sisi2 = document.getElementById("side-b").value
    let sisi3 = document.getElementById("side-c").value

    let hasilkeliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3)

    document.write('Hasilnya adalah ' + hasilkeliling)
}
