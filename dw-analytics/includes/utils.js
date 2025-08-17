function generateSurrogateKey(...strings) {
  const defaultNullValue = "_utils_surrogate_key_null_";
  var stringsWithNullHandling = strings.map(field => `CONCAT(COALESCE(CAST(${field} AS STRING),"${defaultNullValue}"),"-")`);
  const concatenatedString = stringsWithNullHandling.join(' || ');
  return `TO_HEX(SHA256(${concatenatedString}))`;
}

module.exports = { generateSurrogateKey};
