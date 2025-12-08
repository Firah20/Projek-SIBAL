// datepicker-fix.js: no-op placeholder
// The previous version attempted to move datepicker DOM nodes into document.body,
// which caused React/Dash to throw "removeChild" errors when it attempted to
// remove nodes from their original parents. Keeping this file as a harmless
// placeholder prevents the previous problematic logic from running while still
// allowing CSS overrides in `assets/datepicker-fix.css` to handle popover clipping.
(function(){
    // intentionally empty; CSS-only fixes are used instead
})();
