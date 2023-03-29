/*function trueDamage(_swordDamage,_critDamage) {
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
*/

function showData(){
    // Pierwszy Wiersz 
    var baseDamage = document.getElementById("swordMatBase");
    var critDamage = document.getElementById("swordMatCrit");
    // Drugi Wiersz
    var strengthBaseDamage = document.getElementById("swordStrBase");
    var strengthCritDamage = document.getElementById("swordStrCrit");
    
    var selectedValue = document.getElementById("swordMaterial").value;
    var StrValue = document.getElementById("swordStrength").value;
    if (selectedValue == 4) {
        baseDamage.innerHTML = 4;
        critDamage.innerHTML = 4*1.5;
        strengthBaseDamage.innerHTML = 4 *1.3 + 1.3-1/0.3;
        strengthCritDamage.innerHTML = 4*1.5 *1.3*StrValue+ 1.3*StrValue-1/0.3;
    }else if (selectedValue == 5) {
        baseDamage.innerHTML = 5;
        critDamage.innerHTML = 5*1.5;
    }else if (selectedValue == 6) {
        baseDamage.innerHTML = 6;
        critDamage.innerHTML = 6*1.5;
    }else if (selectedValue == 7) {
        baseDamage.innerHTML = 7;
        critDamage.innerHTML = 7*1.5;
    }else if (selectedValue == 8) {
        baseDamage.innerHTML = 8;
        critDamage.innerHTML = 8*1.5;
    }
}
