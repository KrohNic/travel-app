export default (countries, term) => {
  return countries.filter(({ capital, country }) => {
    const isCapitalSuits = capital.toLowerCase().includes(term);
    const isCountrySuits = country.toLowerCase().includes(term);

    return isCapitalSuits || isCountrySuits;
  });
};
