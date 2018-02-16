import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new', {
    path: '/calendars/new'
  });
    this.route('calendars');

  this.route('calendar', {
    path: '/calendars/:calendar_id'
  });

  this.route('edit', {
    path: '/calendars/:calendar_id/edit'
  });
});

export default Router;
