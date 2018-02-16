import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        save(){
            this.get('model').save().then(
                () => this.transitionToRoute('calendars'),
                () => console.log('model did not save')
            );
        },
        cancel(){
            this.get('model').deleteRecord();
            return true;
        }
    }
});
