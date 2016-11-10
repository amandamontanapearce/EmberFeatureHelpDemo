import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  students: hasMany('course-student'),
  registrations: hasMany('registration'),
});
