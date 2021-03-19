import * as localesObj from './';

const localesList = Object.values(localesObj);
let lookup = {};

localesList.forEach((item) => {
  lookup[item.locale] = item;
});

export default lookup;
