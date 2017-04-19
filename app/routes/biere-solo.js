import Ember from 'ember';

export default Ember.Route.extend({
    //Get une bière par Id
    model(params){
        
        //on va chercher l'id de la bière dans les paramètre de la route.
        var param;
        param = params.id_biere;
        
        //on get les infos d'une bière.
        return $.getJSON("http://www.nsylvestre.ca/webservice/biere/"+param);
    }

});
