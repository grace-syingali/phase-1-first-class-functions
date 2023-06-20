// Receives a function and calls it
function receivesAFunction(callback) {
    callback(); // Call the provided function
  }

  // Returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }

  // Returns an anonymous function
   function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }