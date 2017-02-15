export default function() {

  this.get('/courses');
  this.get('/courses/:id');
  this.get('/students');
  this.get('/students/:id');
  this.get('/registrations', (schema, request) => {
    if(request.queryParams.student) {
      let query = request.queryParams.student;
      let requestWithParam = schema.registrations.where({ studentId: query });
      return requestWithParam;
    } else {
      return schema.registrations.all();
    }
  });

  function formEncodedToJson(encoded) {
    var result = {};
    encoded.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }

  this.post('/token', (schema, request) => {
    var params = formEncodedToJson(request.requestBody);
    if (params.username === 'me@me.com' && params.password === 'a') {
      return {
        "access_token": "token",
        "token_type": "bearer",
        "official": {
          "id": 8,
        },
      };
    } else {
      var body = {errors: 'email or password is invalid'};
      return new Mirage.Response(401, {}, body);
    }
  });

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
