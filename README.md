# jdom
Very tiny layer of abstraction over the DOM API to make things more legible and obvious.

Example useage:
---

    document
      .find('#myID')
      .children
      .filter(element => element.className === 'foo')
      .remove();


    document
      .findAll('a')
      .on('click', e => e.preventDefault());


    var foo = document.find('#foo').children;
    console.log(foo.sort( ... ));
    

    document.body.find('#foo').appendChild(Element.create('hr'));
    
