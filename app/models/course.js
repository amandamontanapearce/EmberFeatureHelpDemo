import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  courseDates: DS.attr(),
  isAcceptingRegistrations: DS.attr('boolean'),
  students: DS.hasMany('students', {async: true}),
  registrations: DS.hasMany('registration', {async: true}),
});
