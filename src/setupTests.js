// create to get rid of the error connected with the react-slick library and the react-testing-library
window.matchMedia = window.matchMedia || function() {
    return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
    };
    };