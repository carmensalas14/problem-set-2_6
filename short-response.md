# Problem Set 2.6 - Introduction to JavaScript Objects
## Short Response

**1. If I initialize(you had a typo here) the following object...** 
    ```javascript
    const myObject = {
      a: 'name',
      'b': 'test',
      123: 'c',
      1: 'd',
    };
    ```
    **which of the following statements will raise an error? Why?**
    1. `myObject[1];`
    2. `myObject[a];`
    3. `myObject.a;
*An object property name can be any valid JavaScript string or anything that can be converted to a string. Since object properties are associated with string values, if a property like ‘a’ is called without quotes, an error will be thrown. 

**2. What does the following code log? Why? (Be sure to run in the console after you make your prediction 😉)**
      ```javascript
      const coolKid = {
        firstName: function () {
          return 'Carmen';
        },
        lastName: function () {
          return 'Salas';
        },
      };

      console.log(person.firstName + ' ' + person.lastName);
      ```
* This will throw a Reference Error that says ‘person not defined’ because the object ‘person’ that is being logged was never declared.
 
**3. What does the following code log? Why?**
    ```javascript
    const Array = ['a', 'b', 'c'];

    console.log(myArray[0]);
    console.log(myArray[-1]);

    myArray[-1] = 'd';
    myArray['e'] = 5;
    myArray[3] = 'f';

    console.log(myArray[-1]);
    console.log(myArray['e']);
    console.log(myArray);

    ```
*This will log 
```
  console.log(myArray);
[ 'a', 'b', 'c', 'f', '-1': 'd', e: 5 ]
```
*This is because there are only 3 elements in the array ‘myArray’, so when you log the index of the array you will receive a value that exists. However any property that is not a whole number over zero is not considered an index in an array, it will pass as a property name. 
*The properties initialized with the array ‘myArray’ that arent indices will be concatenating to the array as properties and not indices.

**4. Your classmate wrote the following code. They wanted to add elements to an array, sum them, and then divide by the length to find the average. All of the values are `7` so they are confused about why this function is returning `14` for the average. What's going on here?**
    ```javascript
    const myArray = [7, 7];
    myArray[-1] = 7;
    myArray[-2] = 7;

    function average(array) {
      let sum = 0;

      for (let i = -2; i < array.length; i += 1) {
        sum += array[i];
      }

      return sum / array.length;
    }

    average(myArray); // 14... even though we expected 7. Why? 🤔
    ```
*This returns 14 because in the loop you declare i with a value of -2. This means that the loop will call array[-2] first, and -2 is not an index, but a property that was initiated after the ‘myArray’ array was declared. 
*as the loop keeps going it will call array[-1] and after that, it will call the indexes of the array. So overall, ‘myArray’ has a length of 2 because However any property that is not a whole number over zero is not considered an index in an array

**5. What does it mean for an object property to be _enumerable_?**

*If an object property is enumerable it means it is able to be looped through in a loop, because it is counted as an index.




