'use strict';

// document
// ====================
if (!('body' in document)) 
    document.body = document.querySelector('body');

if (!('find' in document)) 
    document.find = document.querySelector;

if (!('findAll' in document)) 
    document.findAll = document.querySelectorAll;

// Element
// ====================
if (!('create' in Element))
    Element.create = document.createElement.bind(document);

if (!('find' in Element.prototype)) 
    Element.prototype.find = Element.prototype.querySelector;

if (!('findAll' in Element.prototype)) 
    Element.prototype.findAll = Element.prototype.querySelectorAll;

if (!('on' in Element.prototype)) 
    Element.prototype.on = Element.prototype.addEventListener;

if (!('remove' in Element.prototype))
    Element.prototype.remove = function() {
        this.parentNode.removeChild(this);
    }

// Array
// ====================
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
            if (!('on' in element)) throw new TypeError('Expected type of Element; ' + typeof element + ' has no "on" method.');
            element.on(event, fn);
        });
    } 

if (!('remove' in Array.prototype))
    Array.prototype.remove = function() { 
        this.forEach(function(element) { 
            if (!('remove' in element)) throw new TypeError('Expected type of Element; ' + typeof element + ' has no "remove" method.');
            element.remove();
        }); 
    };

// NodeList
// ====================
if (!('filter' in NodeList.prototype))
    NodeList.prototype.filter = function(fn) { 
        return Array.of(this).filter(fn); 
    };

if (!('forEach' in NodeList.prototype))
    NodeList.prototype.forEach = function(fn) { 
        Array.of(this).forEach(fn); 
    };

if (!('on' in NodeList.prototype))
    NodeList.prototype.on = function(event, fn) { 
        Array.of(this).on(event, fn);
    };

if (!('remove' in NodeList.prototype))
    NodeList.prototype.remove = function() { 
        Array.of(this).remove();
    };

if (!('sort' in NodeList.prototype))
    NodeList.prototype.sort = function(fn) {
        return Array.of(this).sort(fn);
    }

// HTMLCollection
// ====================
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
