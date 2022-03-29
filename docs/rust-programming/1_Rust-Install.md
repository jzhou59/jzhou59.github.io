---
sidebar_position: 2
---

# Rust Install
## Install C++
1. Download microsoft C++ build tools from [here](https://visualstudio.microsoft.com/visual-cpp-build-tools/).
2. Double click to run it and follow the default procedure(make sure ```windows 10 sdk``` and ```english language pack``` is chosen).


**Why does Rust-installation need installing C++ firstly?**```This is a question that I will update when I get a deeper understanding of Rust.```

In a sentence of my current understanding, Rust supports functions offered by OS, which is provided through C++ libraries. 

More references could be found at:
- https://users.rust-lang.org/t/why-do-i-need-microsoft-c-build-tools/18581/22
- https://stackoverflow.com/questions/28568263/why-do-i-need-a-c-compiler-to-compile-rust


## Install Rust
1. Download official installer RustUP-init from [here](https://www.rust-lang.org/tools/install).
2. Double click to run it and the RustUP-init will automatically check whether C++ has been installed.
3. Follow the default procedure and wait...

## Installed Contents
If installation has followed what is default, two folders is created under home folder: ```.cargo``` and ```.rustup```
Also, the RustUP-init program has updated the ```path``` in os environment.

- ```.cargo```：it has two folders, ```bin``` and ```registry```
    - ```bin```: it stores a bunch of executable files which will be used when programming, such as create\build\run...
    - ```registry```:
- ```.rustup```: it has four folders, ```downloads```, ```tmp```, ```toolchains```, and```update-hashes```
