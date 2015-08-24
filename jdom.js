'use strict';

// ====================
// document
// ====================

// returns 'body' element
if (!('body' in document)) 
document.body = document.querySelector('body');

// returns single node/element
if (!('find' in document)) 
document.find = document.querySelector;

// returns NodeList
if (!('findAll' in document)) 
document.findAll = document.querySelectorAll;

// ====================
// Element
// ====================

// returns Element
if (!('appendTo' in Element.prototype))
Element.prototype.appendTo = function(parent) {
    if (!('appendChild' in parent)) throw new TypeError('Cannot append ' + this + ' to ' + typeof parent);
    parent.appendChild(this);
    return this;
}

// returns Element
if (!('create' in Element))
Element.create = document.createElement.bind(document);

// returns single node/element
if (!('find' in Element.prototype)) 
Element.prototype.find = Element.prototype.querySelector;

// returns NodeList
if (!('findAll' in Element.prototype)) 
Element.prototype.findAll = Element.prototype.querySelectorAll;

// returns Element
if (!('on' in Element.prototype)) 
Element.prototype.on = function(event, fn) {
    if ('addEventListener' in Element.prototype)
        this.addEventListener(event, fn);
    if ('attachEvent' in Element.prototype)
        this.attachEvent('on' + event, fn);
    return this;
}

// returns Element
if (!('remove' in Element.prototype))
Element.prototype.remove = function() {
    this.parentNode.removeChild(this);
    return this;
}

// ====================
// Array
// ====================

// returns undefined
if (!('forEach' in Array.prototype))
Array.prototype.forEach = function(fn, bound) {
    for (var i = 0; i < this.length; i++) {
        fn.call(bound, this[i], i, this)
    }
};

// returns Array
if (!('of' in Array)) 
Array.of = function(list) { 
    return Array.prototype.slice.call(list); 
};

// ====================
// NodeList
// ====================

// returns undefined
if (!('forEach' in NodeList.prototype))
NodeList.prototype.forEach = function(fn, bound) { 
    for (var i = 0; i < this.length; i++) {
        fn.call(bound, this[i], i, this);
    }
};

// returns NodeList
if (!('remove' in NodeList.prototype))
NodeList.prototype.remove = function() { 
    this.forEach(function(element) {
        element.remove();
    });
    return this;
};

// returns NodeList
if (!('appendTo' in NodeList.prototype))
NodeList.prototype.appendTo = function(parent) {
    this.remove().forEach(function(element) {
        parent.appendChild(element);
    });
    return this;
};

// returns NodeList
if (!('on' in NodeList.prototype))
NodeList.prototype.on = function(event, fn) {
    this.forEach(function(element) {
        element.on(event, fn);
    });
    return this;
};

// returns NodeList
if (!('filter' in NodeList.prototype))
NodeList.prototype.filter = function(fn) { 
    var jdr = Math.random();
    Array.of(this).filter(fn).forEach(function(element) {
        element.setAttribute('data-jdom', jdr);
    });
    var filtered = document.findAll('[data-jdom="' + jdr + '"]');
    filtered.forEach(function(element) {
        element.removeAttribute('data-jdom');
    });
    return filtered;
};

// returns Array
if (!('sort' in NodeList.prototype))
NodeList.prototype.sort = function(fn) {
    return Array.of(this).sort(fn);
}

// ====================
// HTMLCollection
// ====================

// returns undefined
if (!('forEach' in HTMLCollection.prototype))
HTMLCollection.prototype.forEach = NodeList.prototype.forEach;

// returns HTMLCollection
if (!('remove' in HTMLCollection.prototype))
HTMLCollection.prototype.remove = NodeList.prototype.remove;

// returns HTMLCollection
if (!('appendTo' in HTMLCollection.prototype))
HTMLCollection.prototype.appendTo = NodeList.prototype.appendTo;

// returns HTMLCollection
if (!('on' in HTMLCollection.prototype))
HTMLCollection.prototype.on = NodeList.prototype.on;

// returns NodeList
if (!('filter' in HTMLCollection.prototype))
HTMLCollection.prototype.filter = NodeList.prototype.filter;

// returns Array
if (!('sort' in HTMLCollection.prototype))
HTMLCollection.prototype.sort = NodeList.prototype.sort;
