# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @gus.demoura/lotide`

**Require it:**

`const _ = require('@gus.demoura/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertEqual(actual, expected)`: assert if two primitive values are equal
- `assertArraysEqual(arr1, arr2)`: assert if two arrays are equal
- `assertObjectsEqual(actual, expected)`: assert if two objects are equal
- `countLetters(string)`: created an object that counts how many times each letter appears in giver string
- `countOnly(allItems, itemsToCount)`: given an array, counts how many times itemsToCount appears in that array
- `eqArrays(arr1, arr2)`: determine if two arrays are equal
- `eqObjects(object1, object2)`: determine if two objects are equal
- `findKeys(object, callback)`: return first key whose value matches callback condition
- `findKeysByValue(object, value)`: return key whose value matches value in the argument and undefined if not found
- `head(array)`: return the first item of an array
- `letterPositions(sentence)`: return an object with character as keys and values as all the position that given character occour in a sentence
- `map(array, callback)`: return new array where the condition callback is applied to all items of array of the argument
- `middle(array)`: return new array containing the middle item(s) of given array. If given array has odd number of items returns one middle element, if even return both middle elements
- `tail(array)`: returns array with all the items after the first one of given array
- `takeUntil(array, callback)`: returns new array with items in same order of given array up to the element that satisfies the condition of the callback argument
- `without(source, itemsToRemove)`: returns new array that does not contain items listed in itemsToRemove argument