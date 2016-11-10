import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  students: belongsTo(),
  courses: belongsTo(),
});
