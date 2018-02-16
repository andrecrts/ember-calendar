import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        save(){
            this.get('model').save().then(
                () => this.transitionToRoute('calendars'),
                () => console.log('model did not save')
            );
        },
        delete(){
            this.get('model').destroyRecord().then(
                () => this.transitionToRoute('calendars'),
                () => console.log('model did not destroy')
            );
        }
    }

});
