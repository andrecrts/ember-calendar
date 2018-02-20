import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
  session: service(),
  actions:{
    authenticate(){
      var { login, password } = this.getProperties('login','password')
      this.get('session').authenticate('authenticator:oauth2',login,password)
    }
  }
});
