import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  courses: DS.hasMany('course', {async: true}),
  registrations: DS.hasMany('registration', {async: true}),
});
