---
sidebar_position: 4
---

# Number Theory Basis

## 一、素数和素数分解
补充概念：
1. 1既不是素数（prime）也不是合数（composite）。
2. 素数分解（prime factorisation）指将一个数分解为多个素数的幂级数的乘积。

## 二、整数分解问题（IFP：Integer Factorisation Problem）
问题重述：给定一个大整数n，求两个素数p，q，使得p*q=n。
符号表述：b|a = a÷b = b divides a = b is a divisor of a；a by b = a ÷ b = qn + r。
如果GCD(a,b) = 1，那么a和b为相对素数。
通过素数分解可以找到GCD，即为共有的素数幂级数的成绩，举例：

```math
300 = 2^2*3^1*5^2; 18 = 2^1*3^2

GCD(300,18) = 2^1*3^1
```

## 三、组环域（Group，Ring，and Field）
三者为满足特地数与数之间关系的数的集合。
### 3.1 组Group
成为一个Group，内部的元素需要通过操作符‘·’（表示不限制操作的类型）链接，且需要满足一定条件A1~A4。
A1：closure - 如果a，b属于组，那么a·b也需要属于组。
A2：associative - a·（b·c）=（a·b）·c对于所有的a，b，c成立。
A3：identity element - 一定有一个元素e使得e·a=a·e=a对于所有的a成立。
A4：inverse element - 对于所有的a，一定存在a’，使得a·a’ = a’·a = e。
**满足A5的被称为Abelian Group**
A5: commutative - a·b = b·a对于所有a，b都成立。
举例：（Z，+）是一个abelian group，因为满足A1~A5的所有条件。表示当前组的元素是有整数集合Z构成的，且当前组的操作符‘·’实例化为‘+’。

**Cyclic Group**
在cyclic group中所有的元素都是某个数a的幂。此时，a被称为这个组的generator，并把组表示为G=\<a>。一个cyclic一定是abelian的，内部的元素数量有限和无限都是可以的。
### 3.2 环Ring
通常表示为{R，+，x}，在满足成为一个Group的基础上，还需要满足M1~M3的条件。本质上，一个Ring中的元素进行相互之前的加减乘操作不需要使用到Ring意外的元素。
M1：closure under multiplication - 如果a和b均属于Ring，那么ab也属于Ring。
M2：associativity of multiplication - a（bc）=（ab）c对于所有的abc都成立。
M3：distributive laws - a（b+c）= ab+ac，（a+b）c=ac+ac对于所有abc都成立。
举例：（Z，+，x）是一个ring，因为满足M1~M3的所有条件。
**满足M4被称为Commutative Ring**
M4：commutativity of multiplication - ab = ba对于所有ab成立。
**满足M5，M6被称为Integral Domain**
M5：Multiplicative identity - 有一个元素1，使得a1 = 1a = a 对所有数均成立。
M6：No one divisors - 如果ab=0，那么要么a=0，要么b=0。

### 3.3 域Field
在满足A1~M6的基础之上，域还需要满足M7。本质上，一个Field中的元素进行加减乘除运算不会涉及到Field之外的元素。举例：实数，有理数，复数等等。
M7：Multiplicative inverse - 对于除0之外的所有a，都有一个a^-1使得
```math
aa^-1=a^-1a=1
```
![组环域关系.png](https://upload-images.jianshu.io/upload_images/23770791-d49946d924e0fd92.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 四、模运算
补充概念：
1. 
a mod n = b mod n == a=b mod n
此时a与b的关系可以表示为a=qn+b。b is the residue of n divides a(or a divided by n)。
2. a与b之间的运算法则

```math
(a+b) mod n = [(a mod n) + (b mod n)] mod n;
(a*b) mod n = [(a mod n) * (b mod n)] mod n;
(a-b) mod n = [(a mod n) - (b mod n)] mod n;
if (a+b)=(a+c) mod n, then b=c mod n;
when a and n are relative prime, if (a*b) = (a*c) mod n, then b = c mod n.
```
3. Ring中的元素进行模取运算的时候需要有的特征。
![组环域模取运算特点.png](https://upload-images.jianshu.io/upload_images/23770791-e5119c57642f59b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 五、Galois Field
GP中的元素一定是一个数p的幂，表示为GP(p^n)。
**模取运算方法：Square-and-Multiply**
1. 以2，4，8，16...为指数，依次运算，直到运算到小于目标数且最大的指数值。
2. 将该幂与已算出来的幂相乘。
好抽象。。。。看例子：5^27 mod 7

```math
5^2 mod 7 = 4
5^4 mod 7 = (4*4) mod 7 = 2
5^8 mod 7 = (2*2) mod 7 = 4
5^16 mod 7 = (4*4) mod 7 = 2
5^27 = (5^16 * 5^8 * 5^2 * 5^1) mod 7 = (2*4*4*5) mod 7 = 6
```

## 六、费马定理和欧拉定理
费马定理的内容：a^(p-1) = 1 mod p; p为素数，a为一个整数，且GCD(p,a)=1；
形式2：a^p = a mod p;
欧拉函数∮(n)表示[1,n-1]中与n互为素数的数量。
特殊情况下，∮(p)=p-1 if p is prime; ∮(p*q)=(p-1)(q-1) if p,q are primes。
欧拉定理的内容：a^∮(n)=1 mod n； a^-1 =  a^(∮(n)-1) mod n

## 七、Miller-Robin 算法
这是一个用于判断某个数是否为素数的算法。
![Miller-Robin.png](https://upload-images.jianshu.io/upload_images/23770791-5d166f586208900e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 八、CRT(Chinese Reminder Theorem)
通过某个数的模取元素的集合中的两个与该数互为素数的素数即可以计算出整个集合。

## 九、原始根（Primitive Root）
针对欧拉定理中的指数，有可能存在比∮(n)还要小，但是模取结果也为1的值，如果是的模取解雇为1的最小指数即为∮(n)，那么这个a就被称为原始根。

## 十、DLP(Discrete Logarithm Problem)
G = \<a> 给定a和b∈G，找到一个指数x使得a^x = b。





















