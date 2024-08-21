function convertToSocialCredits() {
    const aura = parseFloat(document.getElementById("auraInput").value);
    if (!isNaN(aura)) {
        const socialCredits = (aura / 100) * 15;
        document.getElementById("socialCreditsInput").value = socialCredits.toFixed(2);
    } else {
        document.getElementById("socialCreditsInput").value = "";
    }
}

function convertToAura() {
    const socialCredits = parseFloat(document.getElementById("socialCreditsInput").value);
    if (!isNaN(socialCredits)) {
        const aura = (socialCredits / 15) * 100;
        document.getElementById("auraInput").value = aura.toFixed(2);
    } else {
        document.getElementById("auraInput").value = "";
    }
}


document.querySelector("#auraInput").addEventListener("input", convertToAura)
document.querySelector("#socialCreditsInput").addEventListener("input", convertToSocialCredits)