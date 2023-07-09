(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{bHDp:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=a("dEAq"),c=a("H1Ra"),o=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u7d22\u5f15\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#\u7d22\u5f15\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7d22\u5f15\u7c7b\u578b"),l.a.createElement("p",null,"\u7d22\u5f15\u7c7b\u578b\uff08Index Types\uff09\u7684\u4f7f\u7528\u8ba9\u7f16\u8bd1\u5668\u80fd\u591f\u68c0\u67e5\u4f7f\u7528\u4e86\u52a8\u6001\u5c5e\u6027\u540d\u7684\u7c7b\u578b\u3002"),l.a.createElement("p",null,"\u5e38\u89c1\u7684 JavaScript \u6a21\u5f0f\u5c31\u662f\u4ece\u5bf9\u8c61\u4e2d\u9009\u53d6\u5c5e\u6027\u7684\u5b50\u96c6\u3002"),l.a.createElement("p",null,"\ud83c\udf30 ",l.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),l.a.createElement(c["a"],{code:"function pluck<T, K extends keyof T>(o: T, names: K[]): T[k][] {\n  return names.map(n => o[n]);\n}\n\ninterface Person {\n  name: string;\n  age: number;\n}\n\nconst tom: Person = {\n  name: 'Tom',\n  age: 25,\n};\n\nconst values: string[] = pluck(tom, ['name']);",lang:"ts"}),l.a.createElement("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4f1a\u68c0\u67e5 ",l.a.createElement("code",null,"name")," \u662f\u5426\u771f\u7684\u662f ",l.a.createElement("code",null,"Person")," \u7684\u4e00\u4e2a\u5c5e\u6027\u3002\u672c\u4f8b\u8fd8\u5f15\u5165\u4e86\u51e0\u4e2a\u65b0\u7684\u7c7b\u578b\u64cd\u4f5c\u7b26\uff0c\u6bd4\u5982 ",l.a.createElement("code",null,"keyof T"),"\uff0c\u7d22\u5f15\u7c7b\u578b\u7684\u67e5\u8be2\u64cd\u4f5c\u7b26\u3002"),l.a.createElement("h2",{id:"\u7d22\u5f15\u67e5\u8be2\u64cd\u4f5c\u7b26"},l.a.createElement(r["AnchorLink"],{to:"#\u7d22\u5f15\u67e5\u8be2\u64cd\u4f5c\u7b26","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7d22\u5f15\u67e5\u8be2\u64cd\u4f5c\u7b26"),l.a.createElement("p",null,"\u7d22\u5f15\u7c7b\u578b\u7684\u67e5\u8be2\u64cd\u4f5c\u7b26 ",l.a.createElement("code",null,"keyof T"),"\u3002"),l.a.createElement("p",null,"\u5bf9\u4e8e\u4efb\u4f55\u7c7b\u578b\u67e5\u8be2\u64cd\u4f5c\u7b26\uff0c\u5047\u8bbe ",l.a.createElement("code",null,"T")," \u662f\u4e00\u4e2a\u7c7b\u578b\uff0c\u90a3\u4e48 ",l.a.createElement("code",null,"keyof T")," \u4ea7\u751f\u7684\u7c7b\u578b\u662f ",l.a.createElement("code",null,"T")," \u7684\u5c5e\u6027\u540d\u79f0\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\u6784\u6210\u7684\u8054\u5408\u7c7b\u578b\u3002"),l.a.createElement(c["a"],{code:"interface Person {\n  name: string;\n  age: number;\n  address: string;\n}\n\ntype person = keyof Person; // 'name' | 'age' | 'address'",lang:"ts"}),l.a.createElement("p",null,l.a.createElement("code",null,"keyof Person")," \u662f\u5b8c\u5168\u53ef\u4ee5\u4e0e ",l.a.createElement("code",null,"'name' | 'age' | 'address'")," \u4e92\u76f8\u66ff\u6362\u7684\u3002"),l.a.createElement("p",null,"\u4e0d\u540c\u7684\u662f\u5982\u679c\u4f60\u6dfb\u52a0\u4e86\u5176\u4ed6\u7684\u5c5e\u6027\u5230 ",l.a.createElement("code",null,"Person"),"\uff0c\u4f8b\u5982 ",l.a.createElement("code",null,"gender: string"),"\uff0c\u90a3\u4e48 ",l.a.createElement("code",null,"keyof Person")," \u4f1a",l.a.createElement("strong",null,"\u81ea\u52a8"),"\u53d8\u4e3a ",l.a.createElement("code",null,"'name' | 'age' | 'address' | 'gender'"),"\u3002"),l.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u5728\u50cf ",l.a.createElement("code",null,"pluck")," \u51fd\u6570\u8fd9\u7c7b\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528 ",l.a.createElement("code",null,"keyof"),"\uff0c\u56e0\u4e3a\u5728\u4f7f\u7528\u4e4b\u524d\u4f60\u5e76\u4e0d\u6e05\u695a\u53ef\u80fd\u51fa\u73b0\u7684\u5c5e\u6027\u540d\u3002\u4f46\u7f16\u8bd1\u5668\u4f1a\u68c0\u67e5\u4f60\u662f\u5426\u4f20\u5165\u6b63\u786e\u7684\u5c5e\u6027\u540d\u7ed9 ",l.a.createElement("code",null,"pluck"),"\uff1a"),l.a.createElement(c["a"],{code:"pluck(tom, ['age', 'unknow']); // error: 'unknown' is not in 'name' | 'age'",lang:"ts"}),l.a.createElement("h2",{id:"\u7d22\u5f15\u8bbf\u95ee\u64cd\u4f5c\u7b26"},l.a.createElement(r["AnchorLink"],{to:"#\u7d22\u5f15\u8bbf\u95ee\u64cd\u4f5c\u7b26","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7d22\u5f15\u8bbf\u95ee\u64cd\u4f5c\u7b26"),l.a.createElement("p",null,"\u7d22\u5f15\u8bbf\u95ee\u64cd\u4f5c\u7b26 ",l.a.createElement("code",null,"T[K]"),"\uff0c\u8868\u793a ",l.a.createElement("code",null,"T")," \u7684\u5c5e\u6027 ",l.a.createElement("code",null,"K")," \u7684\u7c7b\u578b\u3002"),l.a.createElement(c["a"],{code:"interface Person {\n  name: string;\n  age: number;\n}\n\ntype name = Person['name'];\n// type name = string",lang:"ts"}),l.a.createElement("p",null,"\u5c31\u50cf\u7d22\u5f15\u7c7b\u578b\u67e5\u8be2\u4e00\u6837\uff0c\u53ef\u4ee5\u5728\u666e\u901a\u7684\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528 ",l.a.createElement("code",null,"T[K]"),"\uff0c\u8fd9\u6b63\u662f\u5b83\u5f3a\u5927\u6240\u5728\u3002\u53ea\u8981\u786e\u4fdd\u7c7b\u578b\u53d8\u91cf ",l.a.createElement("code",null,"K extends keyof T")," \u5c31\u53ef\u4ee5\u4e86\u3002"),l.a.createElement("p",null,"\ud83c\udf30 ",l.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),l.a.createElement(c["a"],{code:"function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {\n  return o[name]; // o[name] is of type T[K]\n}",lang:"ts"}),l.a.createElement("p",null,l.a.createElement("code",null,"getProperty")," \u91cc\u7684 ",l.a.createElement("code",null,"o: T")," \u548c ",l.a.createElement("code",null,"name: K"),"\uff0c\u610f\u5473\u7740 ",l.a.createElement("code",null,"o[name]: T[K]"),"\u3002\u5f53\u4f60\u8fd4\u56de ",l.a.createElement("code",null,"T[K]")," \u7684\u7ed3\u679c\uff0c\u7f16\u8bd1\u5668\u4f1a\u5b9e\u4f8b\u5316\u952e\u7684\u771f\u5b9e\u7c7b\u578b\uff0c\u56e0\u6b64 ",l.a.createElement("code",null,"getProperty")," \u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4f1a\u968f\u7740\u4f60\u9700\u8981\u7684\u5c5e\u6027\u6539\u53d8\u3002"),l.a.createElement(c["a"],{code:"const name: string = getProperty(person, 'name');\nconst age: number = getProperty(person, 'age');\n\nconst unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'",lang:"ts"}),l.a.createElement("h2",{id:"\u5b57\u7b26\u4e32\u7d22\u5f15\u7b7e\u540d"},l.a.createElement(r["AnchorLink"],{to:"#\u5b57\u7b26\u4e32\u7d22\u5f15\u7b7e\u540d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b57\u7b26\u4e32\u7d22\u5f15\u7b7e\u540d"),l.a.createElement("p",null,"\u5982\u679c\u7c7b\u578b ",l.a.createElement("code",null,"T")," \u5e26\u6709\u5b57\u7b26\u4e32\u7d22\u5f15\u7b7e\u540d\uff0c\u90a3\u4e48 ",l.a.createElement("code",null,"keyof T")," \u4e3a ",l.a.createElement("code",null,"string | number")," \u7c7b\u578b\u3002"),l.a.createElement("p",null,"\u5982\u679c\u7c7b\u578b ",l.a.createElement("code",null,"T")," \u5e26\u6709\u6570\u5b57\u7d22\u5f15\u7b7e\u540d\uff0c\u90a3\u4e48 ",l.a.createElement("code",null,"keyof T")," \u4e3a ",l.a.createElement("code",null,"number")," \u7c7b\u578b\u3002"),l.a.createElement("p",null,"\u5982\u679c\u7c7b\u578b ",l.a.createElement("code",null,"T")," \u5e26\u6709\u7d22\u5f15\u7b7e\u540d\uff0c\u90a3\u4e48 ",l.a.createElement("code",null,"T[K]")," \u4e3a\u7d22\u5f15\u7b7e\u540d\u7684\u7c7b\u578b\u3002"),l.a.createElement(c["a"],{code:"interface Map<T> {\n  [key: string]: T;\n}\n\nlet keys: keyof Map<number>;    // string\n\nlet value: Map<number>['foo'];  // number",lang:"ts"})))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),a=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:a})}}}]);