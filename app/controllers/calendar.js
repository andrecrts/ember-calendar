import Controller from '@ember/controller';

export default Controller.extend({
    monthName: moment().format('MMMM YYYY')
});
