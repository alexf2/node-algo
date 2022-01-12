var field1 = 10;

class MyClass {
    field1

	constructor() {
    this.field1 = 15;
  }

    regularFunction(line) {
  	    console.log(`${line}: `, this.field1);
    }
  
  arrowFunction = line => console.log(`${line}: `, this.field1);
};


const instance = new MyClass();
instance.regularFunction(1);
instance.arrowFunction(2);

const f1 = instance.regularFunction;
// f1(11); needs 'this' context binding
f1.call(instance, 11);

const f2 = instance.arrowFunction;
f2(12); 


function test() { // needs to provide 'this' for arrowFunction
  const obj = {
    field2: 25,
    
    regularFunction: function(line) {
      console.log(`${line}: `, this.field2);
    },
    
    arrowFunction: line => console.log(`${line}: `, this.field2),
  }

  obj.regularFunction(3);
  obj.arrowFunction(4); // does not work without wrapping 'test' fuction bound to objTmp, as arrow function uses the nearest outer function scope to get 'this'

  const f1 = obj.regularFunction;
  // f1(31); needs 'this' context binding
  f1.call(obj, 31);

  const f2 = obj.arrowFunction;
  f2(41);
}

const objTmp = {
  field2: 33,
};
test.call(objTmp);
