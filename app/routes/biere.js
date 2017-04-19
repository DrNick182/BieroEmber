import Ember from 'ember';

export default Ember.Route.extend({
    
    //Get toutes les bières
    model: function(){
        return $.getJSON("http://www.nsylvestre.ca/webservice/biere");
        
    }
});
