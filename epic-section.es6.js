(function() {
  'use strict';
  class EpicSection {

      // Define behaviors with a getter.
    get behaviors() {
      return [Polymer.IronResizableBehavior];
    }

    beforeRegister() {
      this.is = 'epic-section';
      this.properties = {
          isReady: {
            type: Boolean,
            value: false,
            readyOnly: true
        },
        readystate: {
            type: String,
            value: '',
            readyOnly: true
        }
      };
      this.observers = [];
      this.listeners = {
      };
    }
    // Define other lifecycle methods as you need.
    ready() {
        this.queryMatchChanges = Rx.Observable.from(Polymer.dom(this.root).querySelectorAll('iron-media-query'))
        .flatMap(element=>Rx.DOM.fromEvent(element, 'query-matches-changed'));

        this.queryMatchChanges
            .debounce(100 /* ms */)
            .subscribe(eventType=>this.updateStyles());
    }
    attached() { }
    detached() {  }
    attributeChanged() {  }

    _handleResize(e){
        this.updateStyles();
    }

    _hasFooterItems(){
        var distributed = this.getContentChildren('#footer content');
        console.log(distributed.length);
    }
  }




  // Register the element using Polymer's constructor.
  Polymer(EpicSection);
})();
