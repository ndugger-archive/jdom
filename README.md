# jdom
Very tiny layer of abstraction over the DOM API to make things more legible and obvious.

API:
===

document
---

- **`document.find`** : `Element`

Find a single element (Alias for `document.querySelector`):

    document.find(cssSelector);
    
---

- **`document.findAll`** : `NodeList`

Find multiple elements (Alias for `document.querySelectorAll`):

    document.findAll(cssSelector);
    
---

Element
---

- **`Element.create`** : `Element`

Create a new element (Similar to `Object.create`, Alias for `document.createElement`):

    Element.create(tagName);

---

- **`Element.prototype.appendTo`** : `Element`

Append an element to a specific parent ([Reverse] Alias for `Element.prototype.appendChild`):

    myElement.appendTo(parentElement);

---

- **`Element.prototype.find`** : `Element`

Find a single child of an element (Alias for `Element.prototype.querySelector`):

    myElement.find(cssSelector);

---

- **`Element.prototype.findAll`** : `NodeList`

Find multiple children of an element (Alias for `Element.prototype.querySelectorAll`):

    myElement.findAll(cssSelector);

---

- **`Element.prototype.on`** : `Element`

Add an event listener to an element (supports attachEvent for IE8)

    myElement.on(eventName, callback);

---

- **`Element.prototype.remove`** : `Element`

Already a feature in modern browsers; removes element from DOM

    myElement.remove();
    
---

Array
---

- **`Array.of`** : `Array`

ES6 feature that creates an array of ___; Used in *jdom* to transform a NodeList/HTMLCollection into an Array

    Array.of(myNodeList);
    
---

- **`Array.prototype.forEach`** : `undefined`

Already a feature in modern browsers; iterates over Array

    myArray.forEach(function(item, i, array) {
        ...
    }, bound);
    
---

NodeList
---

- **`NodeList.prototype.forEach`** : `undefined`

iterates over a NodeList

    myNodeList.forEach(function(element, i, nodelist) {
        ...
    }, bound);

---

*Adding more... work in progress...*

---

Example usage:
===

    // Removing a child of #myID that has a class of 'foo'
    document
      .find('#myID')
      .children
      .filter(element => element.className === 'foo')
      .remove();


    // Find all a tags, and disable their default behaviour on click
    document
      .findAll('a')
      .on('click', e => e.preventDefault());


    // Get/remove children of #foo then put them back, sorted.
    document
      .find('#foo')
      .children
      .remove()
      .sort((a, b) => ...)
      .appendTo(document.find('#foo'));
    

    // Append a new hr element to #foo
    document.body.find('#foo').appendChild(Element.create('hr'));
    
