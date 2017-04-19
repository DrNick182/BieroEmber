import Ember from 'ember';

export default Ember.Route.extend({
    //Fait de la route accueil la route par défaut 
    beforeModel(){
        this.replaceWith('accueil');
    }
});
