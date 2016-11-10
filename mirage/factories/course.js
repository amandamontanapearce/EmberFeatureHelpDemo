import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.company.catchPhrase(); },
  email() { return faker.internet.email(); },
  is_accepting_Registrations() {return faker.random.boolean(); },
  course_dates: [
    "2017-04-21",
    "2017-04-22",
    "2017-04-23",
  ],
});
