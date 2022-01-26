---
sidebar_position: 4
---
# Lambda Expression
## 1. lambda的出现
在匿名类中，有些接口或者类只有一个方法需要实现或者重写，采用```new interface(){ void method(Type var){} }```创建一个匿名类实例不免有些繁杂。lambda表达式的出现就是为了替换接口匿名类，使得实例化的时候只需要关注接口唯一方法中方法体的参数和方法体内的逻辑语句就可以。

## 2. lambda的形式
一个完整的lambda语句包括用**括号**包围的**参数**，多个参数之间用**逗号**隔开，一个横线加右尖括号代表的**箭头**，用**大括号**包围的方法体，方法体最后会**返回**一个值，不管是什么值都会返回，具体返回值需要由方法体的返回修饰符决定，如果返回修饰符是void，那么就直接是return;如果方法体中只有一句话，那么可以省略大括号，表达式自动返回语句的执行结果。例如：
```Java
(Type1 param1, Type2 param2) -> {
    //do something with param1 or param2 or not
    return/* something or not*/;
}
```

## 3. 例子
既然lambda的出现是为了替换只有一个函数的接口的匿名类，那么就举一个从普通类到匿名类，再到lambda的例子，整体代码见[7. 代码](#7-代码)

背景如下：```有一个抽象汽车类，包含两个属性，一个是发动机缸数，另一个是座位数。现在需要查看所有车（存放在一个list中）中的家用小型三缸车（缸数为3，座位为2~5）```

抽象汽车类如下：
```Java
class Car{
    int engines = 3;
    int seats = 4;
    Car(int engines, int seats){
        this.engines = engines;
        this.seats = seats;
    }

    public int getEngines() {
        return engines;
    }

    public int getSeats() {
        return seats;
    }

    @Override
    public String toString() {
        return "Car{" +
                "engines=" + engines +
                ", seats=" + seats +
                '}';
    }
}
```
首先想到的是，拿到所有的车，然后在函数里写判断条件并打印输出：
```Java
//第一种直接通过代码的方式
static void printCars(List<Car> cars){
    for (Car car : cars){
        if (car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5){
            System.out.println(car.toString());
        }
    }
}
//1.直接调用第一种代码函数
printCars(cars);
```
如果这个时候需要改变判断条件，只能到```printCars```方法代码中进行修改，而不可以随意指定。取而代之，可以通过使用接口匿名类，在调用```printCars```方法时指定接口的具体函数：
```Java
//第二种将判断语句独立开来，可以在调用的时候指定判断标准
interface HomeCars{
    boolean isHomeCars(Car car);
}
static void printCars(List<Car> cars, HomeCars homeCars){
    for (Car car : cars){
        if (homeCars.isHomeCars(car)){
            System.out.println(car.toString());
        }
    }
}
//2.通过匿名类调用第二种代码函数
printCars(cars, new HomeCars() {
    @Override
    public boolean isHomeCars(Car car) {
        return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;
    }
});
```
此时，接口匿名类还有更简便的写法，那就是lambda表达式，调用函数的代码如下：
```Java
//3.通过lambda调用第二种代码
printCars(cars, (car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;});
```
如果打印条件发生变化了怎么办？同样的，将```printCars```方法有关打印的片段也抽象为接口就丸四了，具体方法与判断条件的接口类似。

那么每次定义一个函数难倒都要定义一个接口？？？其实不然，jdk中已经提供了不少供lambda使用的接口，例如```Predicate<T>```，``` Consumer<T>```等等。

难倒每次调用一个接口只能对确定的类进行操作？？？除了局限在确定的类，还可以通过泛化的手段使得```printCars```方法的参数不仅仅是Car类型的。

既然有点代码都嫌繁杂，那能不能不写函数，直接就实现查找和打印的功能呢，当然可以，使用聚合操作就可以了。

对应使用方式如下：
```Java
//第三种将打印也独立开来，需要再加一个接口，可以在调用的时候指定要打印什么
//第三种与第四第五种代码相同虽然定义的时候不冲突，但是在调用的时候会出现冲突，所以要注释掉其中两个测试另外一个
interface Printer{
    void print(Car car);
}
static void printCars(List<Car> cars, HomeCars homeCars, Printer printer){
    for (Car car : cars){
        if (homeCars.isHomeCars(car)){
            printer.print(car);
        }
    }
}

//        //第四种使用jdk提供的接口
//        static void printCars(List<Car> cars, Predicate<Car> tester, Consumer<Car> block){
//            for (Car car : cars){
//                if (tester.test(car)){
//                    block.accept(car);
//                }
//            }
//        }

//        //第五种使用泛型接口
//        static <X> void printCars(List<X> sources, Predicate<X> tester, Consumer<X> block){
//            for (X source : sources){
//                if (tester.test(source)){
//                    block.accept(source);
//                }
//            }
//        }

//4.通过lambda调用第三、四、五种代码
printCars(cars, (car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;},
        (car) -> {System.out.println(car.toString());});

//5.通过聚合操作调用
cars.stream()
        .filter((car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;})
        .forEach((car) -> {System.out.println(car.toString());});
```

## 4. 与方法和外部类中成员的关系
lambda函数与匿名类类似，可以通过类的引用访问类的实例变量，以及直接访问局部变量或者参数变量，其中局部变量或者参数变量需要是final类型或者effectively final，因为与匿名类一样，lambda表达式对于变量的访问采用的是捕获变量。

不必担心lambda的局部shadowing，因为lambda并没有开辟一个新的命名空间，所以如果lambda中出现了已有的局部变量或者参数变量，java编译的过程就会报错。


## 5. lambda表达式所代表的类型
lambda可以说是用一种简单的方式替代了接口匿名类。既然是接口匿名类，匿名出来的肯定是一个实例，是实例就应该有类型。

lambda也不例外，整个表达式也是有类型的。编译器通过lambda所在位置的上下文（例如返回值，参数等等）推断lambda的目标类型，所以在使用lambda的前提是编译器能够推断出lambda的类型，例如上文的第三种第四种第五种```printCars```方案产生冲突的原因就是，编译器无法根据参数返回值等区别确定lambda表达式的类型是三四五哪一个方法中的。

可以确定类型的情形如下：
- 变量声明
- 赋值
- 返回语句
- 数组初始化
- 函数体参数
- lambda表达式区域
- 条件判断式
- 强制转换表达式


## 6. 序列化
可以对lambda进行序列化，不过不同的编译器序列化的结果可能不同，导致反序列化的结果也可能不同，所以不推荐。

## 7. 代码
```Java
package Lambda;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class LambdaClass {
    static class Car{
        int engines = 3;
        int seats = 4;
        Car(int engines, int seats){
            this.engines = engines;
            this.seats = seats;
        }

        public int getEngines() {
            return engines;
        }

        public int getSeats() {
            return seats;
        }

        @Override
        public String toString() {
            return "Car{" +
                    "engines=" + engines +
                    ", seats=" + seats +
                    '}';
        }

        //第一种直接通过代码的方式
        static void printCars(List<Car> cars){
            for (Car car : cars){
                if (car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5){
                    System.out.println(car.toString());
                }
            }
        }

        //第二种将判断语句独立开来，可以在调用的时候指定判断标准
        interface HomeCars{
            boolean isHomeCars(Car car);
        }
        static void printCars(List<Car> cars, HomeCars homeCars){
            for (Car car : cars){
                if (homeCars.isHomeCars(car)){
                    System.out.println(car.toString());
                }
            }
        }

        //第三种将打印也独立开来，需要再加一个接口，可以在调用的时候指定要打印什么
        //第三种与第四第五种代码相同虽然定义的时候不冲突，但是在调用的时候会出现冲突，所以要注释掉其中两个测试另外一个
        interface Printer{
            void print(Car car);
        }
        static void printCars(List<Car> cars, HomeCars homeCars, Printer printer){
            for (Car car : cars){
                if (homeCars.isHomeCars(car)){
                    printer.print(car);
                }
            }
        }

//        //第四种使用jdk提供的接口
//        static void printCars(List<Car> cars, Predicate<Car> tester, Consumer<Car> block){
//            for (Car car : cars){
//                if (tester.test(car)){
//                    block.accept(car);
//                }
//            }
//        }

//        //第五种使用泛型接口
//        static <X> void printCars(List<X> sources, Predicate<X> tester, Consumer<X> block){
//            for (X source : sources){
//                if (tester.test(source)){
//                    block.accept(source);
//                }
//            }
//        }

        public static void main(String[] args) {
            List<Car> cars = new ArrayList<>();
            cars.add(new Car(3,2));
            cars.add(new Car(3,4));
            cars.add(new Car(3,5));
            cars.add(new Car(6,5));
            cars.add(new Car(6,7));

            //1.直接调用第一种代码
            printCars(cars);

            //2.通过匿名类调用第二种代码
            printCars(cars, new HomeCars() {
                @Override
                public boolean isHomeCars(Car car) {
                    return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;
                }
            });

            //3.通过lambda调用第二种代码
            printCars(cars, (car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;});

            //4.通过lambda调用第三、四、五种代码
            printCars(cars, (car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;},
                    (car) -> {System.out.println(car.toString());});

            //5.通过聚合操作调用
            cars.stream()
                    .filter((car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;})
                    .forEach((car) -> {System.out.println(car.toString());});
        }
    }
}
```