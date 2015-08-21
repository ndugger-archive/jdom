# jdom
Very tiny layer of abstraction over the DOM API to make things more legible and obvious.

Example useage:
---

    document
      .find('#myID')
      .children
      .find('li')
      .filter(li => li.className === 'foo')
      .remove();
      
    document
      .find('a')
      .on('click', e => e.preventDefault());
      
    var foo = document.find('#foo').children;
    console.log(foo.sort( ... ));
