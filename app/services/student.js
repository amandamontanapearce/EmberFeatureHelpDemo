import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  currentUser() {
    return Ember.RSVP.hash({
      student: this.get('store').findRecord('student', 1)
    });
  },
});
