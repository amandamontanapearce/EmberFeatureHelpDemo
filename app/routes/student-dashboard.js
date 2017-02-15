import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
