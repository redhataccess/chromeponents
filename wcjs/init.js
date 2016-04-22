// http://robdodson.me/exploring-html-imports/

var ChromeAppPrototype = Object.create(HTMLElement.prototype);
ChromeAppPrototype.createdCallback = function() {
    // this.textContent = "I'm an x-foo!";
};

ChromeAppPrototype.foo = function() {
    console.log('foo() called');
};

var ChromeApp = document.registerElement('chrome-app', {
    prototype: ChromeAppPrototype
});

// hide body to prevent FOUC
window.addEventListener('WebComponentsReady', function() {
    var html           = document.querySelector('link[rel=import]');
    var chrome_wrapper = html.import.querySelector('#page-wrap');
    document.body.appendChild(document.importNode(chrome_wrapper, true));
    document.querySelector('#cp-content').appendChild(content);
    // show body now that everything is ready
    document.body.style.opacity = 1;
    console.log(`WebComponentsReady`);
});


window.addEventListener('HTMLImportsLoaded', function(e) {
    // all imports loaded
    console.log(`HTMLImportsLoaded`);
});
