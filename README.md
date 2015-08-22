# jdom
Very tiny layer of abstraction over the DOM API to make things more legible and obvious.

API:
===

document
---

- **`document.find`**

Find a single element (Alias for `document.querySelector`):

    document.find(cssSelector);
    
---

- **`document.findAll`**

Find multiple elements (Alias for `document.querySelectorAll`):

    document.findAll(cssSelector);
    
---

Element
---

- **`Element.prototype.appendTo`**

Append an element to a specific parent ([Reverse] Alias for `Element.prototype.appendChild`):

    myElement.appendTo(parentElement);

- **`Element.create`**

Create a new element (Similar to `Object.create`, Alias for `document.createElement`):

    Element.create(tagName);

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
    
