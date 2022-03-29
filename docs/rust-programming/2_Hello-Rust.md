---
sidebar_position: 3
---

# "Hello Rust" Code Example
This note contains some cargo tools and a hello-rust project example.

## Cargo tools
There are several tools for cargo to compile/create/build/check/release etc.
- ```rustc```: compile a rust file(ended with ```.rs```) to a executable file
- ```cargo```: very useful and recommended rust project management tool, contianing  create/build/check/release/... options.*function like ```maven``` in java*
    - ```cargo new [project name]```: create a new rust project, including a top-level folder naming ```[project name]```, a sub folder naming ```src``` with a rust file ```main.rs``` in it, a ```.gitignore``` file, and a ```Cargo.toml``` file
    - ```cargo build```: build the project and put executable file under target\debug\ folder
    - ```cargo run```: run the executable file created by ```cargo build```
    - ```cargo build --release```: build the project and put executable file under target\release folder (in this way, executable file is optimized than ```cargo build```)
    - ```cargo check```: check whether project has been build

## Example Prject
The toc of ```cargo new hello``` project is as follows:
```shell
|--hello : project name
|----src : source code
|------main.rs : rust file
|----.gitignore : git ignore
|----Cargo.toml : cargo management file
```

The toc of ```cargo build``` project is as follows:
```shell
|--hello : project name
|----src : source code
|------main.rs : rust file
|----target : build output
|------debug/...
|----Cargo.lock : generated file, should not be changed
|----.gitignore : git ignore
|----Cargo.toml : cargo management file
```

Content inside ```main.rs```: ```main``` function is the entrance, ```!``` is a sign of ```macro```
```rust
fn main(){
    println!("Hello, rust!");
}
```



Content inside ```Cargo.toml```:

under ```[package]```, metadata of the rust project is listed, under ```[dependencies]```, referred libraries(called as ```crate``` in rust) is listed
```toml
[package]
name = "hello"
version = "0.1.0"
edition = "2021"

[dependencies]
```

