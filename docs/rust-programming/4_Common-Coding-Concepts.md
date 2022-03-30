---
sidebar_position: 5
---

# Common concepts presented in Rust

## vars and mutability
**variables** : a symbol for a 'thing'

**immutable** : an immutable means the value inside variables cannot be changed, it is default for every variables

**mut** : when a variable need to be mutable, it must be clearly stated

**const** : constant

**shadowing** : a variable could refer to something else by using ```let [var]``` again, to be noted, inside-scope shadowing will not affect the var outside the scope

## Data Types
### Scalar Type
Rust has four scalar types: ```integers```, ```float point```,  ```Boolean```, ```Character```.

For ```integers```, there are serveral types: ```i8```,```i16```, ```i32```, ```i64```, ```i128```, ```isize```, and ```u8```,```u16```, ```u32```, ```u64```, ```u128```, ```usize```. Among them, ```i``` means signed integer, ```u```means unsigned integer, ```size``` means the size is depended by OS.

For ```float point```, there are two types: ```f64``` and ```f32```. ```f64``` is recommended.

For ```Boolean```, the symbol is ```bool```. It uses one byte

For ```Character```, the symbole is ```char```, it is different from most langs. Rust uses four bytes for a character and one character actually means an Unicode, meaning ```emoji``` is supported, yeah.

### Compound Type
There are two compound types, ```tuple``` and ```array```.

For ```tuple```, there are a piece of code representing traditional usage:
```Rust
    let tup: (i32, f64, u8) = (500, 6.4, 1);

    let tup = (500, 6.4, 1);

    println!("The value of tupe are: {}, {}, and {}", tup.0, tup.1, tup.2);

    let (x, y, z) = tup;

    println!("The value of y is: {}", y);
```
Data types inside a tuple should not be the same.

For ```array```, there are a piece of code representing tradditional usage:
```Rust
    let arr : [u32;  5] = [0,1,2,3,4];
    let mut index = String::new();
    io::stdin().read_line(&mut index).expect("Failed to read");
    let index : usize = index.trim().parse().expect("Input is not a valid number.");
    println!("The index {} value of arr is {}", index, arr[index]);
```
Data types inside an array should be the same, and length of an array should be fixed.

The index type of an array should be ```usize```.

To make the most use of an array, try ```vector```.

