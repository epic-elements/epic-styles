(function() {
  'use strict';
  class EpicElement {

      // Define behaviors with a getter.
    get behaviors() {
      return [Polymer.IronResizableBehavior];
    }

    beforeRegister() {
      this.is = 'epic-element';
      this.properties = {};
      this.observers = [];
      this.listeners = {
      };
    }
    // Define other lifecycle methods as you need.
    ready() { }
    attached() { }
    detached() {  }
    attributeChanged() {  }
  }




  // Register the element using Polymer's constructor.
  Polymer(EpicElement);
})();
