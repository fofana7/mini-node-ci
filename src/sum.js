/**
 * Adds two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 * @throws {TypeError} If either a or b is not a number
 */
export function sum(a, b) {
  // Vérifie que les deux arguments sont bien des nombres
  if (typeof a !== 'number' || typeof b !== 'number') {
    // Si l'un des deux n'est pas un nombre, on lance une erreur
    throw new TypeError('Both arguments must be numbers');
  }

  // Retourne la somme des deux nombres
  return a + b;
}

// Exemple d'utilisation
// Exemple de protection de la branche main 
//ex