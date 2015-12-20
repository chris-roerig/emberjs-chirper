import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
    username: DS.attr('string'),
    aboutMe: DS.attr('string'),
    joinedAt: DS.attr('date'),
    chirps: DS.hasMany('chirp', {
        async: true
    }),
    followers: DS.hasMany('user', {
        inverse: 'followees'
    }),
    followees: DS.hasMany('user', {
        inverse: 'followers'
    }),
    numberOfChirps: Ember.computed('chirps',
        function() {
            return this.get('chirps').get('length');
    }),
    numberOfFollowing: Ember.computed('followees',
        function(){
            return this.get('followees').get('length');
    }),
    numberOfFollowers: Ember.computed('followers',
        function(){
            return this.get('followers').get('length');
   })
});
