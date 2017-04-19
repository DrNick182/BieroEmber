import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('accueil');
  this.route('biere');
  this.route('biere-solo', { path: '/biere-solo/:id_biere' });
  this.route('non-trouver', { path: '/*path' });
});

export default Router;
