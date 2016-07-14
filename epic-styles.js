'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var EpicStyles = function () {
    function EpicStyles() {
      _classCallCheck(this, EpicStyles);
    }

    _createClass(EpicStyles, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'epic-styles';
        this.properties = {};
        this.observers = [];
        this.listeners = {};
      }
      // Define other lifecycle methods as you need.

    }, {
      key: 'ready',
      value: function ready() {}
    }, {
      key: 'attached',
      value: function attached() {}
    }, {
      key: 'detached',
      value: function detached() {}
    }, {
      key: 'attributeChanged',
      value: function attributeChanged() {}
    }, {
      key: 'behaviors',


      // Define behaviors with a getter.
      get: function get() {
        return [Polymer.IronResizableBehavior];
      }
    }]);

    return EpicStyles;
  }();

  // Register the element using Polymer's constructor.


  Polymer(EpicStyles);
})();