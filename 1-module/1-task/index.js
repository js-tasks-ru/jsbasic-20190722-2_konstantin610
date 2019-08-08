/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  if (m !== parseInt(m, 10)) {
    return 0;
  }

  return m ** n;
}
