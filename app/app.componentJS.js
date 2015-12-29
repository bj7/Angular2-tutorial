(function (app) {
    app.AppComponent = ng.core 
        .Component({
            selector: 'my-app',
            template: '<h1>My First Pure JS Angular2 App</h1>'
        })
        .Class({
            constructor: function () {}
        });
})(window.app || (window.app = {}));