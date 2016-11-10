import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  serialize(){
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);
    if (Array.isArray(json.data)) {
      json.data.forEach((data, i) => {
        json.data[i].relationships.students.data = this.studentSerialize(data);
      });
    } else {
      json.data.relationships.students.data = this.studentSerialize(json.data);
    }

    return json;
  },
  studentSerialize(data) {
    return data.relationships.students.data.map(courseStudent => ({
      id: this.registry.schema.courseStudents.find(courseStudent.id).studentId.toString(),
      type: 'student',
    }));
  }
});
