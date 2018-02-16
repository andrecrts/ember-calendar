import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    date: attr('string'), //YYYY-MM-DD
    value: attr('boolean'),
    calendar: belongsTo('calendar')
});
