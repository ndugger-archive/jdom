'use strict';

// document
// - body (static, property)
// - find (static)
// - findAll (static)
// ====================
if (!('body' in document)) 
document.body = document.querySelector('body');

if (!('find' in document)) 
document.find = document.querySelector;

if (!('findAll' in document)) 
document.findAll = document.querySelectorAll;

// Element
// - appendTo
// - create (static)
// - find
// - findAll
// - on
// - remove
// ====================
if (!('appendTo' in Element.prototype))
Element.prototype.appendTo = function(parent) {
    if (!('appendChild' in parent)) throw new TypeError('Cannot append ' + this + ' to ' + typeof parent);
    parent.appendChild(this);
}

if (!('create' in Element))
Element.create = document.createElement.bind(document);

if (!('find' in Element.prototype)) 
Element.prototype.find = Element.prototype.querySelector;

if (!('findAll' in Element.prototype)) 
Element.prototype.findAll = Element.prototype.querySelectorAll;

if (!('on' in Element.prototype)) 
Element.prototype.on = function(event, fn) {
    if ('addEventListener' in Element.prototype)
        this.addEventListener(event, fn);
    if ('attachEvent' in Element.prototype)
        this.attachEvent('on' + event, fn);
}

if (!('remove' in Element.prototype))
Element.prototype.remove = function() {
    this.parentNode.removeChild(this);
}

// Array
// - appendTo
// - filter
// - forEach
// - of
// - on
// - remove
// ====================
if (!('appendTo' in Array.prototype))
Array.prototype.appendTo = function(parent) {
    for (var i = 0; i < this.length; i++) {
        if (!('appendChild' in parent)) throw new TypeError('Cannot append ' + this[i] + ' to ' + typeof parent);
        parent.appendChild(this[i]);
    }
}

if (!('filter' in Array.prototype))
Array.prototype.filter = function(fn, bound) {
    var filtered = [];
    for (var i = 0; i < this.length; i++) {
        if (fn.call(bound, this[i], i, this)) {
            filtered.push(this[i]);
        }
    }
    return filtered;
}

if (!('forEach' in Array.prototype))
Array.prototype.forEach = function(fn, bound) {
    for (var i = 0; i < this.length; i++) {
        fn.call(bound, this[i], i, this)
    }
};

if (!('of' in Array)) 
Array.of = function(list) { 
    return Array.prototype.slice.call(list); 
};

if (!('on' in Array.prototype))
Array.prototype.on = function(event, fn) {
    this.forEach(function(element) {
        if (!('on' in element)) throw new TypeError(typeof element + '.on is not a function');
        element.on(event, fn);
    });
    return this;
} 

if (!('remove' in Array.prototype))
Array.prototype.remove = function() { 
    this.forEach(function(element) { 
        if (!('remove' in element)) throw new TypeError(typeof element + '.remove is not a function');
        element.remove();
    }); 
    return this;
};

// NodeList
// - appendTo
// - filter
// - forEach
// - on
// - remove
// - sort
// ====================
if (!('appendTo' in NodeList.prototype))
NodeList.prototype.appendTo = function(parent) {
    return Array.of(this).appendTo(parent);
}

if (!('filter' in NodeList.prototype))
NodeList.prototype.filter = function(fn) { 
    return Array.of(this).filter(fn); 
};

if (!('forEach' in NodeList.prototype))
NodeList.prototype.forEach = function(fn) { 
    return Array.of(this).forEach(fn);
};

if (!('on' in NodeList.prototype))
NodeList.prototype.on = function(event, fn) { 
    return Array.of(this).on(event, fn);
};

if (!('remove' in NodeList.prototype))
NodeList.prototype.remove = function() { 
    return Array.of(this).remove();
};

if (!('sort' in NodeList.prototype))
NodeList.prototype.sort = function(fn) {
    return Array.of(this).sort(fn);
}

// HTMLCollection
// - appendTo
// - filter
// - forEach
// - on
// - remove
// - sort
// ====================
if (!('appendTo' in HTMLCollection.prototype))
HTMLCollection.prototype.appendTo = NodeList.prototype.appendTo;

if (!('filter' in HTMLCollection.prototype))
HTMLCollection.prototype.filter = NodeList.prototype.filter;

if (!('forEach' in HTMLCollection.prototype))
HTMLCollection.prototype.forEach = NodeList.prototype.forEach;

if (!('on' in HTMLCollection.prototype))
HTMLCollection.prototype.on = NodeList.prototype.on;

if (!('remove' in HTMLCollection.prototype))
HTMLCollection.prototype.remove = NodeList.prototype.remove;

if (!('sort' in HTMLCollection.prototype))
HTMLCollection.prototype.sort = NodeList.prototype.sort;
