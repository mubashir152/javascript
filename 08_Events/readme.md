https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

The benefits of addEventListener are as follows:

It allows adding more than one handler for an event. This is particularly useful for libraries, JavaScript modules, or any other kind of code that needs to work well with other libraries or extensions.
In contrast to using an onXYZ property, it gives you finer-grained control of the phase when the listener is activated (capturing vs. bubbling).
It works on any event target, not just HTML or SVG elements.