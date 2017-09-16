const Place = require('./models').Place;
const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI(
  'default-application_5931dd81e4b0eaefb644d037',
  'a8ccee1a-27f1-496e-a16b-176dbfbeba8f'
);
const location = '92104';
const radius = '2000';

rapid
  .call('YelpAPI', 'getBusinesses', {
    accessToken:
      'evT8bFcIz5xSR9PR7EijsQdLZ5RYznENKULx3EZ3Impj0HQsee0aVTj6aJcIgIvkGIP6FYPye9qwB4TKh_yoFZ416bJcLAiRfhgWTDZHBfmDufLRt65Q5yAZqecxWXYx',
    term: 'breakfast',
    location: location,
    coordinate: '',
    radius: radius,
    categories: '',
    locale: '',
    limit: '',
    offset: '',
    sortBy: '',
    price: '',
    openNow: '',
    openAt: '',
    attributes: ''
  })
  .on('success', payload => {
    var vals = [];
    for (var i = 0; i < payload.businesses.length; i++) {
      vals.push(payload.businesses[i]);
    }
    var data = [];
    var promises = [];
    for (var i = 0; i < vals.length; i++) {
      var newObj = Place.build();
      (newObj.yelp_id = vals[i].id),
        (newObj.name = vals[i].name),
        (newObj.image_url = vals[i].image_url),
        (newObj.review_count = vals[i].review_count),
        (newObj.url = vals[i].url),
        (newObj.yelp_rating = vals[i].rating),
        (newObj.price = vals[i].price),
        (newObj.address_street = vals[i].location.address1),
        (newObj.address_city = vals[i].location.city),
        (newObj.address_zip = vals[i].location.zip_code),
        (newObj.address_state = vals[i].location.state),
        (newObj.phone = vals[i].display_phone),
        (newObj.categories = vals[i].categories[0].title),
        promises.push(newObj.save());
    }
    return Promise.all(promises).then(() => process.exit());
  });
