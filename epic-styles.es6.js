(function() {
  'use strict';
  class EpicStyles {

      // Define behaviors with a getter.
    get behaviors() {
      return [Polymer.IronResizableBehavior];
    }

    beforeRegister() {
      this.is = 'epic-styles';
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
  Polymer(EpicStyles);
})();
