/*
* adapt-imageReveal
*/

define([
  'coreViews/componentView',
  'coreJS/adapt',
  'libraries/before-after.min'
], function(ComponentView, Adapt) {

	var ComponentView = require('coreViews/componentView');
	var Adapt = require('coreJS/adapt');

    var ImageReveal = ComponentView.extend({
        
        postRender: function() {
            this.setReadyStatus();
        }

    });
    
    Adapt.register("imageReveal", ImageReveal ); 
    
    return ImageReveal;
});