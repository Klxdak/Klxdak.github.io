function trueDamage(_swordDamage,_critDamage) {
    var swordDamage = parseInt(_swordDamage);
    var critDamage = parseFloat((_swordDamage / 2)*3);
    return swordDamage,critDamage;
}    

function showData() {

var selSwordDamage = sword.swordMaterial;

var readSwordDamage = selSwordDamage[selSwordDamage.selectedIndex].value;

var dSwordMatBase = document.getElementById("swordMatBase");
var dSwordMatCrit = document.getElementById("swordMatCrit");

var swordBase = trueDamage(readSwordDamage);
var swordCrit = trueDamage(readSwordDamage);

dSwordMatBase.innerHTML = swordBase;
dSwordMatCrit.innerHTML = swordCrit;

}
showData;