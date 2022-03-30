---
sidebar_position: 4
---

# Guessing Game Example Code
```Rust
use rand::Rng; // random number generator from crate rand
use std::cmp::Ordering; // compare from std lib
use std::io; // io from std lib

fn main() {
    println!("Guess the number.");

    let secret_number = rand::thread_rng().gen_range(1..101); // generate a random number from [0,101)

    loop { // loop the guessing
        println!("Please input a number:");

        let mut guess_number = String::new();
        io::stdin()
            .read_line(&mut guess_number)
            .expect("Error happens when input.");

        let guess_number = guess_number.trim(); // remove space before and after string
        if guess_number.ends_with("quit") { // check whether inputed string is quit
            break;
        }

        let input: u32 = match guess_number.parse() { // convert string to unsigned 32 integer | catch exception
            Ok(number) => number, // return normal result which is the u32 integer
            Err(_) => { // catch every exception
                println!("Invalid number!");
                continue;
            }
        }; // every exception is a Result Enum having to variants: Ok and Err

        match input.cmp(&secret_number) { // compare two integers' value
            Ordering::Less => println!("Too Small!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
            Ordering::Greater => println!("Too Big!"),
        }
    }
}
```