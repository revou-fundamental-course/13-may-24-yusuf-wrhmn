// script 'Katik'
function JajarGenjang() {
    alert("Menyusul Yaa =p")
}

function LuasSegitiga() {
    let alas = document.getElementById("base").value
    let tinggi = document.getElementById("height").value
    let hasilluas = 0.5 * parseInt(alas) * parseInt(tinggi)
    document.getElementById("formula-area").innerHTML = "L"+" "+"="+" "+"1/2"+" "+"&times"+" "+"a"+" "+"&times"+" "+"t";
    document.getElementById("counting-area").innerHTML = "L"+" "+"="+" "+"1/2"+" "+"&times"+" "+alas+" "+"&times"+" "+ tinggi;
    document.getElementById("area").innerHTML = "L"+" "+"="+" "+hasilluas; 
}

function ResetLuas() {
    var from = document.getElementById("form-area");
    from.reset();
    document.getElementById("formula-area").innerHTML = '';
    document.getElementById("counting-area").innerHTML = '';
    document.getElementById("area").innerHTML = '';
}

function KelilingSegitiga() {
    let sisi1 = document.getElementById("side-a").value
    let sisi2 = document.getElementById("side-b").value
    let sisi3 = document.getElementById("side-c").value
    let hasilkeliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3)
    document.getElementById("formula-circum").innerHTML = "K"+" "+"="+" "+"a"+" "+"+"+" "+"b"+" "+"+"+" "+"c";
    document.getElementById("counting-cricum").innerHTML = "K"+" "+"="+" "+sisi1+" "+"+"+" "+sisi2+" "+"+"+" "+sisi3;
    document.getElementById("circum").innerHTML = "K"+" "+"="+" "+hasilkeliling;
}

function ResetKeliling() {
    var from = document.getElementById("form-circum");
    from.reset();
    document.getElementById("formula-circum").innerHTML = '';
    document.getElementById("counting-cricum").innerHTML = '';
    document.getElementById("circum").innerHTML = '';
}
