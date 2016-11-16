import Ember from 'ember';

export default Ember.Route.extend({
  student: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      courses: this.store.findAll('course'),
      registrations: this.store.query('registration',{student: 1}),
      currentUser: this.get('student').currentUser(),
    });
  },

  setupController(controller,models) {
    controller.setProperties(models);
  }
});
