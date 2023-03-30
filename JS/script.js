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
    // First line
    var baseDamage = document.getElementById("swordMatBase");
    var critDamage = document.getElementById("swordMatCrit");
    // Second line 
    var strengthBaseDamage = document.getElementById("swordStrBase");
    var strengthCritDamage = document.getElementById("swordStrCrit");
    // Third line 
    var sharpnessBaseDamage = document.getElementById("swordShrBase");
    var sharpnessCritDamage = document.getElementById("swordShrCrit");
    // Fourth line 
    var summaryBaseDamage = document.getElementById("swordSumBase");
    var summaryCritDamage = document.getElementById("swordSumCrit");
    
    var selectedValue = document.getElementById("swordMaterial").value;
    var StrValue = document.getElementById("swordStrength").value;
    var ShrValue = document.getElementById("swordSharpness").value;

    if (selectedValue == 4) {
        baseDamage.innerHTML = 4;
        critDamage.innerHTML = 4*1.5;
        strengthBaseDamage.innerHTML = StrValue;
        strengthCritDamage.innerHTML = StrValue*1.5;
        sharpnessBaseDamage.innerHTML = ShrValue;
        sharpnessCritDamage.innerHTML = ShrValue;
        summaryBaseDamage.innerHTML = parseFloat(baseDamage.innerHTML) + parseFloat(strengthBaseDamage.innerHTML) + parseFloat(sharpnessBaseDamage.innerHTML);
        summaryCritDamage.innerHTML = parseFloat(critDamage.innerHTML) + parseFloat(strengthCritDamage.innerHTML) + parseFloat(sharpnessCritDamage.innerHTML);
    }else if (selectedValue == 5) {
        baseDamage.innerHTML = 5;
        critDamage.innerHTML = 5*1.5;
        strengthBaseDamage.innerHTML = StrValue;
        strengthCritDamage.innerHTML = StrValue*1.5;
        sharpnessBaseDamage.innerHTML = ShrValue;
        sharpnessCritDamage.innerHTML = ShrValue;
        summaryBaseDamage.innerHTML = parseFloat(baseDamage.innerHTML) + parseFloat(strengthBaseDamage.innerHTML) + parseFloat(sharpnessBaseDamage.innerHTML);
        summaryCritDamage.innerHTML = parseFloat(critDamage.innerHTML) + parseFloat(strengthCritDamage.innerHTML) + parseFloat(sharpnessCritDamage.innerHTML);
    }else if (selectedValue == 6) {
        baseDamage.innerHTML = 6;
        critDamage.innerHTML = 6*1.5;
        strengthBaseDamage.innerHTML = StrValue;
        strengthCritDamage.innerHTML = StrValue*1.5;
        sharpnessBaseDamage.innerHTML = ShrValue;
        sharpnessCritDamage.innerHTML = ShrValue;
        summaryBaseDamage.innerHTML = parseFloat(baseDamage.innerHTML) + parseFloat(strengthBaseDamage.innerHTML) + parseFloat(sharpnessBaseDamage.innerHTML);
        summaryCritDamage.innerHTML = parseFloat(critDamage.innerHTML) + parseFloat(strengthCritDamage.innerHTML) + parseFloat(sharpnessCritDamage.innerHTML);
    }else if (selectedValue == 7) {
        baseDamage.innerHTML = 7;
        critDamage.innerHTML = 7*1.5;
        strengthBaseDamage.innerHTML = StrValue;
        strengthCritDamage.innerHTML = StrValue*1.5;
        sharpnessBaseDamage.innerHTML = ShrValue;
        sharpnessCritDamage.innerHTML = ShrValue;
        summaryBaseDamage.innerHTML = parseFloat(baseDamage.innerHTML) + parseFloat(strengthBaseDamage.innerHTML) + parseFloat(sharpnessBaseDamage.innerHTML);
        summaryCritDamage.innerHTML = parseFloat(critDamage.innerHTML) + parseFloat(strengthCritDamage.innerHTML) + parseFloat(sharpnessCritDamage.innerHTML);
    }else if (selectedValue == 8) {
        baseDamage.innerHTML = 8;
        critDamage.innerHTML = 8*1.5;
        strengthBaseDamage.innerHTML = StrValue;
        strengthCritDamage.innerHTML = StrValue*1.5;
        sharpnessBaseDamage.innerHTML = ShrValue;
        sharpnessCritDamage.innerHTML = ShrValue;
        summaryBaseDamage.innerHTML = parseFloat(baseDamage.innerHTML) + parseFloat(strengthBaseDamage.innerHTML) + parseFloat(sharpnessBaseDamage.innerHTML);
        summaryCritDamage.innerHTML = parseFloat(critDamage.innerHTML) + parseFloat(strengthCritDamage.innerHTML) + parseFloat(sharpnessCritDamage.innerHTML);
    }
}
