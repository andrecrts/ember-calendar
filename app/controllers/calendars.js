import Ember from 'ember';

export default Ember.Controller.extend({
    calendarSorting:['name'],
    sortedCalendars:Ember.computed.sort('model', 'calendarSorting')
});
