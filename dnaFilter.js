function filterDNA(dnaString) {
    if (dnaString === "") {
        return "";
    }

    return dnaString.toUpperCase().replace(/[^CTAG]/g, "");
}

module.exports = filterDNA;
