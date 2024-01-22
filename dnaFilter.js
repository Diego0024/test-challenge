// dnaFilter.js

function filterDNA(dnaString) {
    if (dnaString === "") {
        return "";
    }

    // Convierte toda la cadena a mayúsculas y luego elimina las bases no canónicas
    return dnaString.toUpperCase().replace(/[^CTAG]/g, "");
}

module.exports = filterDNA;
