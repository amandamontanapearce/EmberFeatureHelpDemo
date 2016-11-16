import Ember from 'ember';

export default Ember.Controller.extend({

  userCourses: Ember.computed('currentUser', function() {
    let regs = this.get('registrations');
    return this.get('courses').map(function(course) {
      let matchedCourseRegistration = regs.findBy("course.id", course.id);
      if(matchedCourseRegistration) {
          course.set('RegistrationStatus',
          matchedCourseRegistration.get('registrationStatus'));
        }
      console.log(course);
        return course;
    });
  }),
});
