import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
    calendarSorting:['count:desc'],
  sortedCalendars:Ember.computed.sort('model', 'calendarSorting'),
  actions:{
    logout() {
      this.get('session').invalidate()
    }
  }
});
