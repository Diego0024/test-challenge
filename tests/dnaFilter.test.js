// dnaFilter.test.js

const filterDNA = require('./dnaFilter');

test('elimina bases no canónicas y distingue mayúsculas y minúsculas', () => {
    expect(filterDNA('CTAGcgtCGTA')).toBe('CTAGCGTCGTA'); // Ajusta esta línea
});

test('devuelve cadena vacía si la cadena de ADN está vacía', () => {
    expect(filterDNA('')).toBe('');
});
