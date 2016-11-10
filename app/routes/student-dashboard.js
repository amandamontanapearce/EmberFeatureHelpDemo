import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      courses: this.store.findAll('course'),
      students: this.store.findRecord('student', 1),
      registrations: this.store.query('registration', {student: 1}),
    });
  },

  setupController(controller,models) {
    controller.setProperties(models);
  }
});
