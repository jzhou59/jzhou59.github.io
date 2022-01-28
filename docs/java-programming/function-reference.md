---
sidebar_position: 5
---
# Function Referrence
## 1. 函数引用
在使用lambda表达式的时候，表达式中包含多个语句。但也有的时候，lambda表达式中只有一个调用函数的语句。例如```(a)->System.out.println(a)```。这种情况如下，就可以通过*函数引用*的形式（即```System.out::println```）使得程序更加的简洁。

需要记住的是，lambda表达式是用来表示接口函数的，一个lambda表达式可以替换匿名接口类的一个函数，那么*函数引用*也是，不能随便用，需要用来替换接口的实现。

## 2. 举例
有一个抽象学生类，包含年龄，姓名，性别三个变量，提供了setter/getter方法，以及比较姓名字母排序的方法。

在程序中，根据学生类创建出了多个学生，并保存在数组中。如何使用```sort(T[] a, Comparator<? super T> c)```对数组中的学生根据姓名字母进行排序。

**第一个**方法是创建出一个Comparator接口的匿名类，Comparator本身是一个接口，在匿名类中对接口方法进行实现。
```Java
Arrays.sort(students, new Comparator<Student>() {
    @Override
    public int compare(Student o1, Student o2) {
        return o1.getName().compareToIgnoreCase(o2.getName());
    }
});
```

**第二个**方法，既然接口只实现了一个方法，那么就可以使用lambda表达式，并且在Lambda表达式中无需指定```a```、```b```的类型，编译器会推断出lambda表达式中的变量属于哪个类型。
```Java
Arrays.sort(students, (a, b) -> a.getName().compareToIgnoreCase(b.getName()));
```

**第三个**方法，在lambda表达式将比较方法写了一遍，但其实Student类中已经有了比较方法，无须再写一遍，所以可以将这个繁琐（这一句可能不算繁琐，但是有很多语句的时候，重复写不免就比较繁琐了）的比较方法使用Student中提供的实现。
```Java
Arrays.sort(students, (a, b) -> Student.compareByName(a,b));
```

**第四个**方法，此时如果使用的是idea等集成开发环境，开发环境就会提示你用*函数引用*了，这是因为lambda表达式中只有一个语句而且是调用的Student中的一个static函数，可以省略成*函数引用*的形式。下面的语句```Student::compareByName```就是*函数引用*的一种形式--引用静态函数。
```Java
Arrays.sort(students, Student::compareByName);
```

## 3. 函数引用的类型和对应形式
在四种情况下可以采用*函数引用*，相应地有四种引用形式，表格如下：

*函数引用*情形 | *函数引用*形式
---|---
引用类中的静态函数 | ClassName::StaticMethod
引用某个实例的函数 | instanceName::Method
引用某个类的任意实例的函数 | ClassName::Method
引用类中的构造函数 | ClassName::new

其中前两个很好理解，而第三个和第四个有点新奇。

**第三个**我寻思着不就是类中的非静态函数吗？答案为是。确实是非静态函数，但是这种方法引用是有限制的。主要是对于被引用方法的参数和接口方法参数的限制（具体可以查看[这篇博文](https://blog.csdn.net/weixin_41126303/article/details/81187002)），限定条件为：
- 接口函数必须要比引用函数多一个参数
- 并且第一个参数为引用函数所在类或者父类的实例*即第一个参数为```ClassName instanceName```的形式或者```ParentofClassName instanceName```*

在示例中，有```Arrays.sort(students, Student::compareByNameInInstance);```这样一句话，其中Arrays.sort()的参数中第二个参数所实现的接口方法```int compare(T o1, T o2)```有两个参数，分别是```compare()```，类型为Student（此处程序会将泛型编译为Student类型），这就可以发现①比```compareByNameInInstance(Student student)```的参数多一个，②```compare```第一个参数```Student o1```为Student类的一个实例。

**第四个**构造函数使用方法引用不禁引出一个问题，如果构造函数需要参数，那么参数怎么表示？

在使用引用函数的时候不需要表示参数。回忆第一段lambda的使用位置，引用构造函数对某一个接口进行实例化，此时构造函数是接口函数中的语句，那么这个接口函数有几个参数，实例化的时候就会调用相同参数个数的构造函数。例如下面代码中，接口为```StudentSupplier```，接口里的函数```get()```没有参数,那么在```Student.activateStudent(Student::new)```中调用的其实是```Student()```。


## 4. 代码
```Java
package Lambda;

import java.util.Arrays;
import java.util.Comparator;

public class MethodReferenceClass {
    static class Student{
        int age;
        String name;
        boolean gender;

        Student(){
            this(0,"",true);
        }

        Student(int age, String name, boolean gender){
            this.age = age;
            this.name = name;
            this.gender = gender;
        }

        public String getName() {
            return name;
        }

        //根据学生名字的首字母排序
        static int compareByName(Student a, Student b){
            return a.getName().compareToIgnoreCase(b.getName());
        }

        int compareByNameInArbitraryInstance(Student a, Student b){
            return a.getName().compareToIgnoreCase(b.getName());
        }

        int compareByNameInInstance(Student a){
            return this.getName().compareToIgnoreCase(a.getName());
        }

        static void activateStudent(StudentSupplier studentSupplier){
            Student student = studentSupplier.get();
        }

        interface StudentSupplier{
            Student get();
        }

    }

    public static void main(String[] args) {
        Student s1 = new Student(12, "Abby", false);
        Student s2 = new Student(12, "Rocky", true);
        Student s3 = new Student(12, "Bobby", true);

        Student[] students = new Student[]{s1,s2,s3};

        //1. 通过新建一个比较器匿名类类实现Comparator接口实现
        Arrays.sort(students, new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                return o1.getName().compareToIgnoreCase(o2.getName());
            }
        });

        //2. 通过使用比较器类的的lambda表达式
        Arrays.sort(students, (a, b) -> a.getName().compareToIgnoreCase(b.getName()));

        //3. 由于Student类中已经存在了这样一个方法，可以不再写比较的语句
        Arrays.sort(students, (a, b) -> Student.compareByName(a,b));

        //4. 此时可以看出，lambda表达式中只调用了一个方法，那么就可以使用方法引用的形式
        Arrays.sort(students, Student::compareByName);

        //5. 通过实例+成员方法实现方法引用
        Arrays.sort(students, students[0]::compareByNameInArbitraryInstance);

        //6. 通过类+成员方法实现引用
        Arrays.sort(students, Student::compareByNameInInstance);

        //7. 实现构造函数并调用构造函数的成员方法
        Student.activateStudent(Student::new);
    }
}

```