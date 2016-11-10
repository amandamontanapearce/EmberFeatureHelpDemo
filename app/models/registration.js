import DS from 'ember-data';

export default DS.Model.extend({
  student: DS.belongsTo('student', {async: true}),
  course: DS.belongsTo('course', {async: true}),
  registrationStatus: DS.attr('string'),
});
