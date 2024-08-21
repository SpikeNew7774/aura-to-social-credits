function convertToSocialCredits() {
    const aura = parseFloat(document.getElementById("auraInput").value);
    if (!isNaN(aura)) {
        const socialCredits = (aura / 100) * 15;
        document.getElementById("socialCreditsInput").value = socialCredits.toFixed(2);
    }
}

function convertToAura() {
    const socialCredits = parseFloat(document.getElementById("socialCreditsInput").value);
    if (!isNaN(socialCredits)) {
        const aura = (socialCredits / 15) * 100;
        document.getElementById("auraInput").value = aura.toFixed(2);
    }
}

document.getElementById("auraInput").addEventListener("input", () => {
    convertToSocialCredits();
});

document.getElementById("socialCreditsInput").addEventListener("input", () => {
    convertToAura();
});
