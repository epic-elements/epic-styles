'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    'use strict';

    var EpicSection = function () {
        function EpicSection() {
            _classCallCheck(this, EpicSection);
        }

        _createClass(EpicSection, [{
            key: 'beforeRegister',
            value: function beforeRegister() {
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
                this.listeners = {};
            }
            // Define other lifecycle methods as you need.

        }, {
            key: 'ready',
            value: function ready() {
                var _this = this;

                this.queryMatchChanges = Rx.Observable.from(Polymer.dom(this.root).querySelectorAll('iron-media-query')).flatMap(function (element) {
                    return Rx.DOM.fromEvent(element, 'query-matches-changed');
                });

                this.queryMatchChanges.debounce(100 /* ms */).subscribe(function (eventType) {
                    return _this.updateStyles();
                });
            }
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
            key: '_handleResize',
            value: function _handleResize(e) {
                this.updateStyles();
            }
        }, {
            key: '_hasFooterItems',
            value: function _hasFooterItems() {
                var distributed = this.getContentChildren('#footer content');
                console.log(distributed.length);
            }
        }, {
            key: 'behaviors',


            // Define behaviors with a getter.
            get: function get() {
                return [Polymer.IronResizableBehavior];
            }
        }]);

        return EpicSection;
    }();

    // Register the element using Polymer's constructor.


    Polymer(EpicSection);
})();