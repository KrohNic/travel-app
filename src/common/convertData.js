export default (data) => {
  return data.map((item) => {
    return {
      route: item['route'],
      country: item['country'],
      description: item['description'],
      capital: item['capital'],
      video: item['video'],
      coordinates: item['coordinates'],
      image: process.env.PUBLIC_URL + item['image'],
    };
  });
};
