import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  courses: hasMany('course-student'),
  registrations: hasMany('registration'),
});
