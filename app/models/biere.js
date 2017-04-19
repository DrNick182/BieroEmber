import DS from 'ember-data';

export default DS.Model.extend({
    id_biere: DS.attr('number'),
    nom: DS.attr('string'),
    brasserie: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string')
});
