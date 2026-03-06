Answer to Question 
======================================

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
* getElementById: Selects a single element using its id. It always returns one element.
* getElementsByClassName: Selects elements with a specific class name. It returns an HTMLCollection (multiple elements).
* querySelector: Selects the first element that matches a CSS selector (id, class, tag, etc.).
* querySelectorAll: Selects all elements that match a CSS selector and returns a NodeList.

======================================
2. How do you create and insert a new element into the DOM?
* Answer: To create and insert a new element into the DOM, use document.createElement() to create the element and appendChild() (or similar methods) to add it to a parent element in the DOM.
======================================
3. What is Event Bubbling? 
* Answer: Event Bubbling is a JavaScript event mechanism where an event starts on the target element and then moves upward through its parent elements in the DOM.

* And how does it work?
* Answer: When an event occurs on an element, the browser first executes the event on that element. After that, the same event automatically propagates to its parent element, then to the parent’s parent, and continues upward through the DOM hierarchy until it reaches the document object.

======================================
* 4. What is Event Delegation in JavaScript? 
Answer: Event Delegation is a technique in JavaScript where a single event listener is added to a parent element to handle events for its child elements.

* Why is it useful?
Answer: It improves performance by reducing the number of event listeners and also works for dynamically added elements in the DOM.

======================================
* 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() – Stops the default browser action for an event.

* stopPropagation() - Stops the event from bubbling or capturing to parent elements.



Technology Stack:

HTML
CSS (Vanilla/Tailwind/DaisyUI)
JavaScript (Vanilla)