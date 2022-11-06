"use strict";(self.webpackChunkjunjiezhou=self.webpackChunkjunjiezhou||[]).push([[9582],{3905:function(n,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function t(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,r)}return a}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){t(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function o(n,e){if(null==n)return{};var a,r,t=function(n,e){if(null==n)return{};var a,r,t={},i=Object.keys(n);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(t[a]=n[a]);return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}var c=r.createContext({}),l=function(n){var e=r.useContext(c),a=e;return n&&(a="function"==typeof n?n(e):s(s({},e),n)),a},p=function(n){var e=l(n.components);return r.createElement(c.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var a=n.components,t=n.mdxType,i=n.originalType,c=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),u=l(a),d=t,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(g,s(s({ref:e},p),{},{components:a})):r.createElement(g,s({ref:e},p))}));function d(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o.mdxType="string"==typeof n?n:t,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8514:function(n,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var r=a(7462),t=a(3366),i=(a(7294),a(3905)),s=["components"],o={sidebar_position:3},c="Lambda Expression",l={unversionedId:"java-programming/oop/lambda",id:"java-programming/oop/lambda",title:"Lambda Expression",description:"1. lambda\u7684\u51fa\u73b0",source:"@site/docs/java-programming/oop/lambda.md",sourceDirName:"java-programming/oop",slug:"/java-programming/oop/lambda",permalink:"/docs/java-programming/oop/lambda",editUrl:"https://github.com/jzhou59/jzhou59.github.io/tree/source/docs/java-programming/oop/lambda.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Nested Class",permalink:"/docs/java-programming/oop/nested-class"},next:{title:"Function Referrence",permalink:"/docs/java-programming/oop/function-reference"}},p={},m=[{value:"1. lambda\u7684\u51fa\u73b0",id:"1-lambda\u7684\u51fa\u73b0",level:2},{value:"2. lambda\u7684\u5f62\u5f0f",id:"2-lambda\u7684\u5f62\u5f0f",level:2},{value:"3. \u4f8b\u5b50",id:"3-\u4f8b\u5b50",level:2},{value:"4. \u4e0e\u65b9\u6cd5\u548c\u5916\u90e8\u7c7b\u4e2d\u6210\u5458\u7684\u5173\u7cfb",id:"4-\u4e0e\u65b9\u6cd5\u548c\u5916\u90e8\u7c7b\u4e2d\u6210\u5458\u7684\u5173\u7cfb",level:2},{value:"5. lambda\u8868\u8fbe\u5f0f\u6240\u4ee3\u8868\u7684\u7c7b\u578b",id:"5-lambda\u8868\u8fbe\u5f0f\u6240\u4ee3\u8868\u7684\u7c7b\u578b",level:2},{value:"6. \u5e8f\u5217\u5316",id:"6-\u5e8f\u5217\u5316",level:2},{value:"7. \u4ee3\u7801",id:"7-\u4ee3\u7801",level:2}],u={toc:m};function d(n){var e=n.components,a=(0,t.Z)(n,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lambda-expression"},"Lambda Expression"),(0,i.kt)("h2",{id:"1-lambda\u7684\u51fa\u73b0"},"1. lambda\u7684\u51fa\u73b0"),(0,i.kt)("p",null,"\u5728\u533f\u540d\u7c7b\u4e2d\uff0c\u6709\u4e9b\u63a5\u53e3\u6216\u8005\u7c7b\u53ea\u6709\u4e00\u4e2a\u65b9\u6cd5\u9700\u8981\u5b9e\u73b0\u6216\u8005\u91cd\u5199\uff0c\u91c7\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"new interface(){ void method(Type var){} }"),"\u521b\u5efa\u4e00\u4e2a\u533f\u540d\u7c7b\u5b9e\u4f8b\u4e0d\u514d\u6709\u4e9b\u7e41\u6742\u3002lambda\u8868\u8fbe\u5f0f\u7684\u51fa\u73b0\u5c31\u662f\u4e3a\u4e86\u66ff\u6362\u63a5\u53e3\u533f\u540d\u7c7b\uff0c\u4f7f\u5f97\u5b9e\u4f8b\u5316\u7684\u65f6\u5019\u53ea\u9700\u8981\u5173\u6ce8\u63a5\u53e3\u552f\u4e00\u65b9\u6cd5\u4e2d\u65b9\u6cd5\u4f53\u7684\u53c2\u6570\u548c\u65b9\u6cd5\u4f53\u5185\u7684\u903b\u8f91\u8bed\u53e5\u5c31\u53ef\u4ee5\u3002"),(0,i.kt)("h2",{id:"2-lambda\u7684\u5f62\u5f0f"},"2. lambda\u7684\u5f62\u5f0f"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5b8c\u6574\u7684lambda\u8bed\u53e5\u5305\u62ec\u7528",(0,i.kt)("strong",{parentName:"p"},"\u62ec\u53f7"),"\u5305\u56f4\u7684",(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"\uff0c\u591a\u4e2a\u53c2\u6570\u4e4b\u95f4\u7528",(0,i.kt)("strong",{parentName:"p"},"\u9017\u53f7"),"\u9694\u5f00\uff0c\u4e00\u4e2a\u6a2a\u7ebf\u52a0\u53f3\u5c16\u62ec\u53f7\u4ee3\u8868\u7684",(0,i.kt)("strong",{parentName:"p"},"\u7bad\u5934"),"\uff0c\u7528",(0,i.kt)("strong",{parentName:"p"},"\u5927\u62ec\u53f7"),"\u5305\u56f4\u7684\u65b9\u6cd5\u4f53\uff0c\u65b9\u6cd5\u4f53\u6700\u540e\u4f1a",(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de"),"\u4e00\u4e2a\u503c\uff0c\u4e0d\u7ba1\u662f\u4ec0\u4e48\u503c\u90fd\u4f1a\u8fd4\u56de\uff0c\u5177\u4f53\u8fd4\u56de\u503c\u9700\u8981\u7531\u65b9\u6cd5\u4f53\u7684\u8fd4\u56de\u4fee\u9970\u7b26\u51b3\u5b9a\uff0c\u5982\u679c\u8fd4\u56de\u4fee\u9970\u7b26\u662fvoid\uff0c\u90a3\u4e48\u5c31\u76f4\u63a5\u662freturn;\u5982\u679c\u65b9\u6cd5\u4f53\u4e2d\u53ea\u6709\u4e00\u53e5\u8bdd\uff0c\u90a3\u4e48\u53ef\u4ee5\u7701\u7565\u5927\u62ec\u53f7\uff0c\u8868\u8fbe\u5f0f\u81ea\u52a8\u8fd4\u56de\u8bed\u53e5\u7684\u6267\u884c\u7ed3\u679c\u3002\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},"(Type1 param1, Type2 param2) -> {\n    //do something with param1 or param2 or not\n    return/* something or not*/;\n}\n")),(0,i.kt)("h2",{id:"3-\u4f8b\u5b50"},"3. \u4f8b\u5b50"),(0,i.kt)("p",null,"\u65e2\u7136lambda\u7684\u51fa\u73b0\u662f\u4e3a\u4e86\u66ff\u6362\u53ea\u6709\u4e00\u4e2a\u51fd\u6570\u7684\u63a5\u53e3\u7684\u533f\u540d\u7c7b\uff0c\u90a3\u4e48\u5c31\u4e3e\u4e00\u4e2a\u4ece\u666e\u901a\u7c7b\u5230\u533f\u540d\u7c7b\uff0c\u518d\u5230lambda\u7684\u4f8b\u5b50\uff0c\u6574\u4f53\u4ee3\u7801\u89c1",(0,i.kt)("a",{parentName:"p",href:"#7-%E4%BB%A3%E7%A0%81"},"7. \u4ee3\u7801")),(0,i.kt)("p",null,"\u80cc\u666f\u5982\u4e0b\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"\u6709\u4e00\u4e2a\u62bd\u8c61\u6c7d\u8f66\u7c7b\uff0c\u5305\u542b\u4e24\u4e2a\u5c5e\u6027\uff0c\u4e00\u4e2a\u662f\u53d1\u52a8\u673a\u7f38\u6570\uff0c\u53e6\u4e00\u4e2a\u662f\u5ea7\u4f4d\u6570\u3002\u73b0\u5728\u9700\u8981\u67e5\u770b\u6240\u6709\u8f66\uff08\u5b58\u653e\u5728\u4e00\u4e2alist\u4e2d\uff09\u4e2d\u7684\u5bb6\u7528\u5c0f\u578b\u4e09\u7f38\u8f66\uff08\u7f38\u6570\u4e3a3\uff0c\u5ea7\u4f4d\u4e3a2~5\uff09")),(0,i.kt)("p",null,"\u62bd\u8c61\u6c7d\u8f66\u7c7b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'class Car{\n    int engines = 3;\n    int seats = 4;\n    Car(int engines, int seats){\n        this.engines = engines;\n        this.seats = seats;\n    }\n\n    public int getEngines() {\n        return engines;\n    }\n\n    public int getSeats() {\n        return seats;\n    }\n\n    @Override\n    public String toString() {\n        return "Car{" +\n                "engines=" + engines +\n                ", seats=" + seats +\n                \'}\';\n    }\n}\n')),(0,i.kt)("p",null,"\u9996\u5148\u60f3\u5230\u7684\u662f\uff0c\u62ff\u5230\u6240\u6709\u7684\u8f66\uff0c\u7136\u540e\u5728\u51fd\u6570\u91cc\u5199\u5224\u65ad\u6761\u4ef6\u5e76\u6253\u5370\u8f93\u51fa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},"//\u7b2c\u4e00\u79cd\u76f4\u63a5\u901a\u8fc7\u4ee3\u7801\u7684\u65b9\u5f0f\nstatic void printCars(List<Car> cars){\n    for (Car car : cars){\n        if (car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5){\n            System.out.println(car.toString());\n        }\n    }\n}\n//1.\u76f4\u63a5\u8c03\u7528\u7b2c\u4e00\u79cd\u4ee3\u7801\u51fd\u6570\nprintCars(cars);\n")),(0,i.kt)("p",null,"\u5982\u679c\u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u6539\u53d8\u5224\u65ad\u6761\u4ef6\uff0c\u53ea\u80fd\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"printCars"),"\u65b9\u6cd5\u4ee3\u7801\u4e2d\u8fdb\u884c\u4fee\u6539\uff0c\u800c\u4e0d\u53ef\u4ee5\u968f\u610f\u6307\u5b9a\u3002\u53d6\u800c\u4ee3\u4e4b\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u63a5\u53e3\u533f\u540d\u7c7b\uff0c\u5728\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"printCars"),"\u65b9\u6cd5\u65f6\u6307\u5b9a\u63a5\u53e3\u7684\u5177\u4f53\u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},"//\u7b2c\u4e8c\u79cd\u5c06\u5224\u65ad\u8bed\u53e5\u72ec\u7acb\u5f00\u6765\uff0c\u53ef\u4ee5\u5728\u8c03\u7528\u7684\u65f6\u5019\u6307\u5b9a\u5224\u65ad\u6807\u51c6\ninterface HomeCars{\n    boolean isHomeCars(Car car);\n}\nstatic void printCars(List<Car> cars, HomeCars homeCars){\n    for (Car car : cars){\n        if (homeCars.isHomeCars(car)){\n            System.out.println(car.toString());\n        }\n    }\n}\n//2.\u901a\u8fc7\u533f\u540d\u7c7b\u8c03\u7528\u7b2c\u4e8c\u79cd\u4ee3\u7801\u51fd\u6570\nprintCars(cars, new HomeCars() {\n    @Override\n    public boolean isHomeCars(Car car) {\n        return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;\n    }\n});\n")),(0,i.kt)("p",null,"\u6b64\u65f6\uff0c\u63a5\u53e3\u533f\u540d\u7c7b\u8fd8\u6709\u66f4\u7b80\u4fbf\u7684\u5199\u6cd5\uff0c\u90a3\u5c31\u662flambda\u8868\u8fbe\u5f0f\uff0c\u8c03\u7528\u51fd\u6570\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},"//3.\u901a\u8fc7lambda\u8c03\u7528\u7b2c\u4e8c\u79cd\u4ee3\u7801\nprintCars(cars, (car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;});\n")),(0,i.kt)("p",null,"\u5982\u679c\u6253\u5370\u6761\u4ef6\u53d1\u751f\u53d8\u5316\u4e86\u600e\u4e48\u529e\uff1f\u540c\u6837\u7684\uff0c\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"printCars"),"\u65b9\u6cd5\u6709\u5173\u6253\u5370\u7684\u7247\u6bb5\u4e5f\u62bd\u8c61\u4e3a\u63a5\u53e3\u5c31\u4e38\u56db\u4e86\uff0c\u5177\u4f53\u65b9\u6cd5\u4e0e\u5224\u65ad\u6761\u4ef6\u7684\u63a5\u53e3\u7c7b\u4f3c\u3002"),(0,i.kt)("p",null,"\u90a3\u4e48\u6bcf\u6b21\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\u96be\u5012\u90fd\u8981\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\uff1f\uff1f\uff1f\u5176\u5b9e\u4e0d\u7136\uff0cjdk\u4e2d\u5df2\u7ecf\u63d0\u4f9b\u4e86\u4e0d\u5c11\u4f9blambda\u4f7f\u7528\u7684\u63a5\u53e3\uff0c\u4f8b\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"Predicate<T>"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"}," Consumer<T>"),"\u7b49\u7b49\u3002"),(0,i.kt)("p",null,"\u96be\u5012\u6bcf\u6b21\u8c03\u7528\u4e00\u4e2a\u63a5\u53e3\u53ea\u80fd\u5bf9\u786e\u5b9a\u7684\u7c7b\u8fdb\u884c\u64cd\u4f5c\uff1f\uff1f\uff1f\u9664\u4e86\u5c40\u9650\u5728\u786e\u5b9a\u7684\u7c7b\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6cdb\u5316\u7684\u624b\u6bb5\u4f7f\u5f97",(0,i.kt)("inlineCode",{parentName:"p"},"printCars"),"\u65b9\u6cd5\u7684\u53c2\u6570\u4e0d\u4ec5\u4ec5\u662fCar\u7c7b\u578b\u7684\u3002"),(0,i.kt)("p",null,"\u65e2\u7136\u6709\u70b9\u4ee3\u7801\u90fd\u5acc\u7e41\u6742\uff0c\u90a3\u80fd\u4e0d\u80fd\u4e0d\u5199\u51fd\u6570\uff0c\u76f4\u63a5\u5c31\u5b9e\u73b0\u67e5\u627e\u548c\u6253\u5370\u7684\u529f\u80fd\u5462\uff0c\u5f53\u7136\u53ef\u4ee5\uff0c\u4f7f\u7528\u805a\u5408\u64cd\u4f5c\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,i.kt)("p",null,"\u5bf9\u5e94\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},"//\u7b2c\u4e09\u79cd\u5c06\u6253\u5370\u4e5f\u72ec\u7acb\u5f00\u6765\uff0c\u9700\u8981\u518d\u52a0\u4e00\u4e2a\u63a5\u53e3\uff0c\u53ef\u4ee5\u5728\u8c03\u7528\u7684\u65f6\u5019\u6307\u5b9a\u8981\u6253\u5370\u4ec0\u4e48\n//\u7b2c\u4e09\u79cd\u4e0e\u7b2c\u56db\u7b2c\u4e94\u79cd\u4ee3\u7801\u76f8\u540c\u867d\u7136\u5b9a\u4e49\u7684\u65f6\u5019\u4e0d\u51b2\u7a81\uff0c\u4f46\u662f\u5728\u8c03\u7528\u7684\u65f6\u5019\u4f1a\u51fa\u73b0\u51b2\u7a81\uff0c\u6240\u4ee5\u8981\u6ce8\u91ca\u6389\u5176\u4e2d\u4e24\u4e2a\u6d4b\u8bd5\u53e6\u5916\u4e00\u4e2a\ninterface Printer{\n    void print(Car car);\n}\nstatic void printCars(List<Car> cars, HomeCars homeCars, Printer printer){\n    for (Car car : cars){\n        if (homeCars.isHomeCars(car)){\n            printer.print(car);\n        }\n    }\n}\n\n//        //\u7b2c\u56db\u79cd\u4f7f\u7528jdk\u63d0\u4f9b\u7684\u63a5\u53e3\n//        static void printCars(List<Car> cars, Predicate<Car> tester, Consumer<Car> block){\n//            for (Car car : cars){\n//                if (tester.test(car)){\n//                    block.accept(car);\n//                }\n//            }\n//        }\n\n//        //\u7b2c\u4e94\u79cd\u4f7f\u7528\u6cdb\u578b\u63a5\u53e3\n//        static <X> void printCars(List<X> sources, Predicate<X> tester, Consumer<X> block){\n//            for (X source : sources){\n//                if (tester.test(source)){\n//                    block.accept(source);\n//                }\n//            }\n//        }\n\n//4.\u901a\u8fc7lambda\u8c03\u7528\u7b2c\u4e09\u3001\u56db\u3001\u4e94\u79cd\u4ee3\u7801\nprintCars(cars, (car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;},\n        (car) -> {System.out.println(car.toString());});\n\n//5.\u901a\u8fc7\u805a\u5408\u64cd\u4f5c\u8c03\u7528\ncars.stream()\n        .filter((car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;})\n        .forEach((car) -> {System.out.println(car.toString());});\n")),(0,i.kt)("h2",{id:"4-\u4e0e\u65b9\u6cd5\u548c\u5916\u90e8\u7c7b\u4e2d\u6210\u5458\u7684\u5173\u7cfb"},"4. \u4e0e\u65b9\u6cd5\u548c\u5916\u90e8\u7c7b\u4e2d\u6210\u5458\u7684\u5173\u7cfb"),(0,i.kt)("p",null,"lambda\u51fd\u6570\u4e0e\u533f\u540d\u7c7b\u7c7b\u4f3c\uff0c\u53ef\u4ee5\u901a\u8fc7\u7c7b\u7684\u5f15\u7528\u8bbf\u95ee\u7c7b\u7684\u5b9e\u4f8b\u53d8\u91cf\uff0c\u4ee5\u53ca\u76f4\u63a5\u8bbf\u95ee\u5c40\u90e8\u53d8\u91cf\u6216\u8005\u53c2\u6570\u53d8\u91cf\uff0c\u5176\u4e2d\u5c40\u90e8\u53d8\u91cf\u6216\u8005\u53c2\u6570\u53d8\u91cf\u9700\u8981\u662ffinal\u7c7b\u578b\u6216\u8005effectively final\uff0c\u56e0\u4e3a\u4e0e\u533f\u540d\u7c7b\u4e00\u6837\uff0clambda\u8868\u8fbe\u5f0f\u5bf9\u4e8e\u53d8\u91cf\u7684\u8bbf\u95ee\u91c7\u7528\u7684\u662f\u6355\u83b7\u53d8\u91cf\u3002"),(0,i.kt)("p",null,"\u4e0d\u5fc5\u62c5\u5fc3lambda\u7684\u5c40\u90e8shadowing\uff0c\u56e0\u4e3alambda\u5e76\u6ca1\u6709\u5f00\u8f9f\u4e00\u4e2a\u65b0\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u6240\u4ee5\u5982\u679clambda\u4e2d\u51fa\u73b0\u4e86\u5df2\u6709\u7684\u5c40\u90e8\u53d8\u91cf\u6216\u8005\u53c2\u6570\u53d8\u91cf\uff0cjava\u7f16\u8bd1\u7684\u8fc7\u7a0b\u5c31\u4f1a\u62a5\u9519\u3002"),(0,i.kt)("h2",{id:"5-lambda\u8868\u8fbe\u5f0f\u6240\u4ee3\u8868\u7684\u7c7b\u578b"},"5. lambda\u8868\u8fbe\u5f0f\u6240\u4ee3\u8868\u7684\u7c7b\u578b"),(0,i.kt)("p",null,"lambda\u53ef\u4ee5\u8bf4\u662f\u7528\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u5f0f\u66ff\u4ee3\u4e86\u63a5\u53e3\u533f\u540d\u7c7b\u3002\u65e2\u7136\u662f\u63a5\u53e3\u533f\u540d\u7c7b\uff0c\u533f\u540d\u51fa\u6765\u7684\u80af\u5b9a\u662f\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u662f\u5b9e\u4f8b\u5c31\u5e94\u8be5\u6709\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"lambda\u4e5f\u4e0d\u4f8b\u5916\uff0c\u6574\u4e2a\u8868\u8fbe\u5f0f\u4e5f\u662f\u6709\u7c7b\u578b\u7684\u3002\u7f16\u8bd1\u5668\u901a\u8fc7lambda\u6240\u5728\u4f4d\u7f6e\u7684\u4e0a\u4e0b\u6587\uff08\u4f8b\u5982\u8fd4\u56de\u503c\uff0c\u53c2\u6570\u7b49\u7b49\uff09\u63a8\u65adlambda\u7684\u76ee\u6807\u7c7b\u578b\uff0c\u6240\u4ee5\u5728\u4f7f\u7528lambda\u7684\u524d\u63d0\u662f\u7f16\u8bd1\u5668\u80fd\u591f\u63a8\u65ad\u51falambda\u7684\u7c7b\u578b\uff0c\u4f8b\u5982\u4e0a\u6587\u7684\u7b2c\u4e09\u79cd\u7b2c\u56db\u79cd\u7b2c\u4e94\u79cd",(0,i.kt)("inlineCode",{parentName:"p"},"printCars"),"\u65b9\u6848\u4ea7\u751f\u51b2\u7a81\u7684\u539f\u56e0\u5c31\u662f\uff0c\u7f16\u8bd1\u5668\u65e0\u6cd5\u6839\u636e\u53c2\u6570\u8fd4\u56de\u503c\u7b49\u533a\u522b\u786e\u5b9alambda\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b\u662f\u4e09\u56db\u4e94\u54ea\u4e00\u4e2a\u65b9\u6cd5\u4e2d\u7684\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u786e\u5b9a\u7c7b\u578b\u7684\u60c5\u5f62\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u58f0\u660e"),(0,i.kt)("li",{parentName:"ul"},"\u8d4b\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u8bed\u53e5"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u521d\u59cb\u5316"),(0,i.kt)("li",{parentName:"ul"},"\u51fd\u6570\u4f53\u53c2\u6570"),(0,i.kt)("li",{parentName:"ul"},"lambda\u8868\u8fbe\u5f0f\u533a\u57df"),(0,i.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u5224\u65ad\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u8f6c\u6362\u8868\u8fbe\u5f0f")),(0,i.kt)("h2",{id:"6-\u5e8f\u5217\u5316"},"6. \u5e8f\u5217\u5316"),(0,i.kt)("p",null,"\u53ef\u4ee5\u5bf9lambda\u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u4e0d\u8fc7\u4e0d\u540c\u7684\u7f16\u8bd1\u5668\u5e8f\u5217\u5316\u7684\u7ed3\u679c\u53ef\u80fd\u4e0d\u540c\uff0c\u5bfc\u81f4\u53cd\u5e8f\u5217\u5316\u7684\u7ed3\u679c\u4e5f\u53ef\u80fd\u4e0d\u540c\uff0c\u6240\u4ee5\u4e0d\u63a8\u8350\u3002"),(0,i.kt)("h2",{id:"7-\u4ee3\u7801"},"7. \u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'package Lambda;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.function.Consumer;\nimport java.util.function.Predicate;\n\npublic class LambdaClass {\n    static class Car{\n        int engines = 3;\n        int seats = 4;\n        Car(int engines, int seats){\n            this.engines = engines;\n            this.seats = seats;\n        }\n\n        public int getEngines() {\n            return engines;\n        }\n\n        public int getSeats() {\n            return seats;\n        }\n\n        @Override\n        public String toString() {\n            return "Car{" +\n                    "engines=" + engines +\n                    ", seats=" + seats +\n                    \'}\';\n        }\n\n        //\u7b2c\u4e00\u79cd\u76f4\u63a5\u901a\u8fc7\u4ee3\u7801\u7684\u65b9\u5f0f\n        static void printCars(List<Car> cars){\n            for (Car car : cars){\n                if (car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5){\n                    System.out.println(car.toString());\n                }\n            }\n        }\n\n        //\u7b2c\u4e8c\u79cd\u5c06\u5224\u65ad\u8bed\u53e5\u72ec\u7acb\u5f00\u6765\uff0c\u53ef\u4ee5\u5728\u8c03\u7528\u7684\u65f6\u5019\u6307\u5b9a\u5224\u65ad\u6807\u51c6\n        interface HomeCars{\n            boolean isHomeCars(Car car);\n        }\n        static void printCars(List<Car> cars, HomeCars homeCars){\n            for (Car car : cars){\n                if (homeCars.isHomeCars(car)){\n                    System.out.println(car.toString());\n                }\n            }\n        }\n\n        //\u7b2c\u4e09\u79cd\u5c06\u6253\u5370\u4e5f\u72ec\u7acb\u5f00\u6765\uff0c\u9700\u8981\u518d\u52a0\u4e00\u4e2a\u63a5\u53e3\uff0c\u53ef\u4ee5\u5728\u8c03\u7528\u7684\u65f6\u5019\u6307\u5b9a\u8981\u6253\u5370\u4ec0\u4e48\n        //\u7b2c\u4e09\u79cd\u4e0e\u7b2c\u56db\u7b2c\u4e94\u79cd\u4ee3\u7801\u76f8\u540c\u867d\u7136\u5b9a\u4e49\u7684\u65f6\u5019\u4e0d\u51b2\u7a81\uff0c\u4f46\u662f\u5728\u8c03\u7528\u7684\u65f6\u5019\u4f1a\u51fa\u73b0\u51b2\u7a81\uff0c\u6240\u4ee5\u8981\u6ce8\u91ca\u6389\u5176\u4e2d\u4e24\u4e2a\u6d4b\u8bd5\u53e6\u5916\u4e00\u4e2a\n        interface Printer{\n            void print(Car car);\n        }\n        static void printCars(List<Car> cars, HomeCars homeCars, Printer printer){\n            for (Car car : cars){\n                if (homeCars.isHomeCars(car)){\n                    printer.print(car);\n                }\n            }\n        }\n\n//        //\u7b2c\u56db\u79cd\u4f7f\u7528jdk\u63d0\u4f9b\u7684\u63a5\u53e3\n//        static void printCars(List<Car> cars, Predicate<Car> tester, Consumer<Car> block){\n//            for (Car car : cars){\n//                if (tester.test(car)){\n//                    block.accept(car);\n//                }\n//            }\n//        }\n\n//        //\u7b2c\u4e94\u79cd\u4f7f\u7528\u6cdb\u578b\u63a5\u53e3\n//        static <X> void printCars(List<X> sources, Predicate<X> tester, Consumer<X> block){\n//            for (X source : sources){\n//                if (tester.test(source)){\n//                    block.accept(source);\n//                }\n//            }\n//        }\n\n        public static void main(String[] args) {\n            List<Car> cars = new ArrayList<>();\n            cars.add(new Car(3,2));\n            cars.add(new Car(3,4));\n            cars.add(new Car(3,5));\n            cars.add(new Car(6,5));\n            cars.add(new Car(6,7));\n\n            //1.\u76f4\u63a5\u8c03\u7528\u7b2c\u4e00\u79cd\u4ee3\u7801\n            printCars(cars);\n\n            //2.\u901a\u8fc7\u533f\u540d\u7c7b\u8c03\u7528\u7b2c\u4e8c\u79cd\u4ee3\u7801\n            printCars(cars, new HomeCars() {\n                @Override\n                public boolean isHomeCars(Car car) {\n                    return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;\n                }\n            });\n\n            //3.\u901a\u8fc7lambda\u8c03\u7528\u7b2c\u4e8c\u79cd\u4ee3\u7801\n            printCars(cars, (car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;});\n\n            //4.\u901a\u8fc7lambda\u8c03\u7528\u7b2c\u4e09\u3001\u56db\u3001\u4e94\u79cd\u4ee3\u7801\n            printCars(cars, (car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;},\n                    (car) -> {System.out.println(car.toString());});\n\n            //5.\u901a\u8fc7\u805a\u5408\u64cd\u4f5c\u8c03\u7528\n            cars.stream()\n                    .filter((car) -> {return car.getEngines()==3 && car.getSeats()>=2 && car.getSeats()<=5;})\n                    .forEach((car) -> {System.out.println(car.toString());});\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);