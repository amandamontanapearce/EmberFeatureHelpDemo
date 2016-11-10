import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  serialize(){
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);

    if (Array.isArray(json.data)) {
      json.data.forEach((data, i) => {
        json.data[i].relationships.courses.data = this.courseSerialize(data);
      });
    } else {
      json.data.relationships.courses.data = this.courseSerialize(json.data);
    }

    return json;
  },
  courseSerialize(data) {
    return data.relationships.courses.data.map(courseStudent => ({
      id: this.registry.schema.courseStudents.find(courseStudent.id).courseId.toString(),
      type: 'course',
    }));
  },
});
