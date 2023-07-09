(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{baVy:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=t("dEAq"),c=t("H1Ra"),o=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u5b9e\u7528\u5de5\u5177\u7c7b\u578b"},r.a.createElement(l["AnchorLink"],{to:"#\u5b9e\u7528\u5de5\u5177\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u7528\u5de5\u5177\u7c7b\u578b"),r.a.createElement("h2",{id:"partial-\u53ef\u9009\u6cdb\u578b"},r.a.createElement(l["AnchorLink"],{to:"#partial-\u53ef\u9009\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Partial \u53ef\u9009\u6cdb\u578b"),r.a.createElement("p",null,r.a.createElement("code",null,"Partial<T>")," \u6784\u9020\u7c7b\u578b ",r.a.createElement("code",null,"T"),"\uff0c\u5e76\u5c06\u5b83 ",r.a.createElement("strong",null,"\u6240\u6709\u7684\u5c5e\u6027")," \u8bbe\u7f6e\u4e3a ",r.a.createElement("strong",null,"\u53ef\u9009\u7684"),"\u3002\u5b83\u7684\u8fd4\u56de\u7c7b\u578b\u8868\u793a\u8f93\u5165\u7c7b\u578b\u7684\u6240\u6709\u5b50\u7c7b\u578b\u3002"),r.a.createElement(c["a"],{code:"interface Todo {\n  title: string;\n  description: string;\n}\n\nfunction updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {\n  return { ...todo, ...fieldsToUpdate };\n}\n\nconst todo1 = {\n  title: 'organize desk',\n  description: 'clear clutter',\n};\n\nconst todo2 = {\n  description: 'throw out trash',\n};",lang:"ts"}),r.a.createElement("h2",{id:"readonly-\u53ea\u8bfb\u6cdb\u578b"},r.a.createElement(l["AnchorLink"],{to:"#readonly-\u53ea\u8bfb\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Readonly \u53ea\u8bfb\u6cdb\u578b"),r.a.createElement("p",null,r.a.createElement("code",null,"Readonly<T>")," \u6784\u9020\u51fd\u6570 ",r.a.createElement("code",null,"T"),"\uff0c\u5e76\u5c06\u5b83 ",r.a.createElement("strong",null,"\u6240\u6709\u7684\u5c5e\u6027")," \u8bbe\u7f6e\u4e3a ",r.a.createElement("strong",null,"\u53ea\u8bfb")," ",r.a.createElement("code",null,"readonly"),"\uff0c\u4e5f\u5c31\u662f\u8bf4\u6784\u9020\u51fa\u7684\u7c7b\u578b\u7684\u5c5e\u6027\u4e0d\u80fd\u88ab\u518d\u6b21\u8d4b\u503c\u3002"),r.a.createElement(c["a"],{code:"interface Todo {\n  title: string;\n}\n\nconst todo: Readonly<Todo> = {\n  title: 'Delete inactive users',\n};\n\ntodo.title = 'Hello';\n// Error: cannot reassign a readonly property",lang:"ts"}),r.a.createElement("p",null,"\u8fd9\u4e2a\u5de5\u5177\u53ef\u7528\u6765\u8868\u793a\u5728\u8fd0\u884c\u65f6\u4f1a\u5931\u8d25\u7684\u8d4b\u503c\u8868\u8fbe\u5f0f\uff08\u6bd4\u5982\uff0c\u5f53\u5c1d\u8bd5\u7ed9\u51bb\u7ed3\u5bf9\u8c61\u7684\u5c5e\u6027\u518d\u6b21\u8d4b\u503c\u65f6\uff09\u3002"),r.a.createElement(c["a"],{code:"function freeze<T>(obj: T): Readonly<T>;",lang:"ts"}),r.a.createElement("h2",{id:"record-\u952e\u503c\u6cdb\u578b"},r.a.createElement(l["AnchorLink"],{to:"#record-\u952e\u503c\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Record \u952e\u503c\u6cdb\u578b"),r.a.createElement("p",null,r.a.createElement("code",null,"Record<K, T>")," \u6784\u9020\u4e00\u4e2a\u7c7b\u578b\uff0c\u5176 ",r.a.createElement("strong",null,"\u5c5e\u6027\u540d")," \u7684\u7c7b\u578b\u4e3a ",r.a.createElement("code",null,"K"),"\uff0c",r.a.createElement("strong",null,"\u5c5e\u6027\u503c")," \u7684\u7c7b\u578b\u4e3a ",r.a.createElement("code",null,"T"),"\u3002\u8fd9\u4e2a\u5de5\u5177\u53ef\u7528\u6765\u5c06\u67d0\u4e2a\u7c7b\u578b\u7684\u5c5e\u6027\u6620\u5c04\u5230\u53e6\u4e00\u4e2a\u7c7b\u578b\u4e0a\u3002"),r.a.createElement(c["a"],{code:"type Key = 'home' | 'about' | 'contact';\n\ninterface Value {\n  title: string;\n}\n\nconst x: Record<Key, Value> = {\n  about: { title: 'about' },\n  contact: { title: 'contact' },\n  home: { title: 'home' },\n};",lang:"ts"}),r.a.createElement("h2",{id:"pick-\u6311\u9009\u5c5e\u6027\u6cdb\u578b"},r.a.createElement(l["AnchorLink"],{to:"#pick-\u6311\u9009\u5c5e\u6027\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Pick \u6311\u9009\u5c5e\u6027\u6cdb\u578b"),r.a.createElement("p",null,r.a.createElement("code",null,"Pick<T, K>")," \u4ece\u7c7b\u578b ",r.a.createElement("code",null,"T")," \u4e2d ",r.a.createElement("strong",null,"\u6311\u9009\u90e8\u5206\u5c5e\u6027")," ",r.a.createElement("code",null,"K")," \u6765\u6784\u9020\u7c7b\u578b\u3002"),r.a.createElement(c["a"],{code:"interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n\ntype TodoPreview = Pick<Todo, 'title' | 'completed'>;\n\nconst todo: TodoPreview = {\n  title: 'Clean Room',\n  completed: false,\n};",lang:"ts"}),r.a.createElement("h2",{id:"exclude-\u5254\u9664\u5c5e\u6027\u6cdb\u578b"},r.a.createElement(l["AnchorLink"],{to:"#exclude-\u5254\u9664\u5c5e\u6027\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Exclude \u5254\u9664\u5c5e\u6027\u6cdb\u578b"),r.a.createElement("p",null,r.a.createElement("code",null,"Exclude<T, U>")," \u4ece\u7c7b\u578b ",r.a.createElement("code",null,"T")," \u4e2d ",r.a.createElement("strong",null,"\u5254\u9664\u6240\u6709")," \u53ef\u4ee5\u8d4b\u503c\u7ed9 ",r.a.createElement("code",null,"U")," \u7684\u5c5e\u6027\uff0c\u7136\u540e\u6784\u9020\u4e00\u4e2a\u7c7b\u578b\u3002"),r.a.createElement(c["a"],{code:"type T0 = Exclude<'a' | 'b' | 'c', 'a'>;\n// \"b\" | \"c\"\n\ntype T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;\n// \"c\"\n\ntype T2 = Exclude<string | number | (() => void), Function>;\n// string | number",lang:"ts"}),r.a.createElement("h2",{id:"extract-\u63d0\u53d6\u5c5e\u6027\u6cdb\u578b"},r.a.createElement(l["AnchorLink"],{to:"#extract-\u63d0\u53d6\u5c5e\u6027\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Extract \u63d0\u53d6\u5c5e\u6027\u6cdb\u578b"),r.a.createElement("p",null,r.a.createElement("code",null,"Extract<T, U>")," \u4ece\u7c7b\u578b ",r.a.createElement("code",null,"T")," \u4e2d ",r.a.createElement("strong",null,"\u63d0\u53d6\u6240\u6709")," \u53ef\u4ee5\u8d4b\u503c\u7ed9 ",r.a.createElement("code",null,"U")," \u7684\u7c7b\u578b\uff0c\u7136\u540e\u6784\u9020\u4e00\u4e2a\u7c7b\u578b\u3002"),r.a.createElement(c["a"],{code:"type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;\n// \"a\"\n\ntype T1 = Extract<string | number | (() => void), Function>;\n// () => void",lang:"ts"}),r.a.createElement("h2",{id:"omit"},r.a.createElement(l["AnchorLink"],{to:"#omit","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Omit"),r.a.createElement("p",null,r.a.createElement("code",null,"Omit<T, K>")," \u901a\u8fc7\u4ece T \u4e2d ",r.a.createElement("strong",null,"\u9009\u53d6")," \u6240\u6709\u5c5e\u6027 ",r.a.createElement("strong",null,"\u7136\u540e\u5220\u9664")," \u4f20\u5165\u7684\u5c5e\u6027 K \u6765\u6784\u9020\u65b0\u7c7b\u578b\u3002"),r.a.createElement(c["a"],{code:"interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n\ntype TodoPreview = Omit<Todo, 'description'>;\n\nconst todo: TodoPreview = {\n  title: 'Clean room',\n  completed: false,\n};",lang:"ts"}),r.a.createElement("h2",{id:"nonnullable-\u5254\u9664\u7a7a\u5c5e\u6027\u6cdb\u578b"},r.a.createElement(l["AnchorLink"],{to:"#nonnullable-\u5254\u9664\u7a7a\u5c5e\u6027\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"NonNullable \u5254\u9664\u7a7a\u5c5e\u6027\u6cdb\u578b"),r.a.createElement("p",null,r.a.createElement("code",null,"NonNullable<T>")," \u4ece\u7c7b\u578b ",r.a.createElement("code",null,"T")," \u4e2d\u5254\u9664 ",r.a.createElement("code",null,"null")," \u548c ",r.a.createElement("code",null,"undefined"),"\uff0c\u7136\u540e\u6784\u9020\u4e00\u4e2a\u7c7b\u578b\u3002"),r.a.createElement(c["a"],{code:"type T0 = NonNullable<string | number | undefined>;\n// string | number\n\ntype T1 = NonNullable<string[] | null | undefined>;\n// string[]",lang:"ts"}),r.a.createElement("h2",{id:"returntype-\u8fd4\u56de\u503c\u7c7b\u578b\u6cdb\u578b"},r.a.createElement(l["AnchorLink"],{to:"#returntype-\u8fd4\u56de\u503c\u7c7b\u578b\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"ReturnType \u8fd4\u56de\u503c\u7c7b\u578b\u6cdb\u578b"),r.a.createElement("p",null,r.a.createElement("code",null,"ReturnType<T>")," \u7531\u51fd\u6570\u7c7b\u578b ",r.a.createElement("code",null,"T")," \u7684\u8fd4\u56de\u503c\u7c7b\u578b\u6784\u9020\u4e00\u4e2a\u7c7b\u578b\u3002"),r.a.createElement(c["a"],{code:"type T0 = ReturnType<() => string>;\n// string\n\ntype T1 = ReturnType<(s: string) => void>;\n// void\n\ntype T2 = ReturnType<<T>() => T>;\n// {}\n\ntype T3 = ReturnType<<T extends U, U extends number[]>() => T>;\n// number[]\n\ntype T4 = ReturnType<typeof f1>;\n// { a: number, b: string }\n\ntype T5 = ReturnType<any>;\n// any\n\ntype T6 = ReturnType<never>;\n// any\n\ntype T7 = ReturnType<string>;\n// Error\n\ntype T8 = ReturnType<Function>;\n// Error",lang:"ts"}),r.a.createElement("h2",{id:"instancetype-\u5b9e\u4f8b\u6cdb\u578b"},r.a.createElement(l["AnchorLink"],{to:"#instancetype-\u5b9e\u4f8b\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"InstanceType \u5b9e\u4f8b\u6cdb\u578b"),r.a.createElement("p",null,r.a.createElement("code",null,"InstanceType<T>")," \u7531\u6784\u9020\u51fd\u6570\u7c7b\u578b ",r.a.createElement("code",null,"T")," \u7684\u5b9e\u4f8b\u7c7b\u578b\u6784\u9020\u4e00\u4e2a\u7c7b\u578b\u3002"),r.a.createElement(c["a"],{code:"class C {\n  x = 0;\n  y = 0;\n}\n\ntype T0 = InstanceType<typeof C>;\n// C\ntype T1 = InstanceType<any>;\n// any\ntype T2 = InstanceType<never>;\n// any\ntype T3 = InstanceType<string>;\n// Error\ntype T4 = InstanceType<Function>;\n// Error",lang:"ts"}),r.a.createElement("h2",{id:"required-\u5fc5\u987b\u6cdb\u578b"},r.a.createElement(l["AnchorLink"],{to:"#required-\u5fc5\u987b\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Required \u5fc5\u987b\u6cdb\u578b"),r.a.createElement("p",null,r.a.createElement("code",null,"Required<T>")," \u6784\u9020\u4e00\u4e2a\u7c7b\u578b\uff0c\u4f7f\u7c7b\u578b ",r.a.createElement("code",null,"T")," \u7684\u6240\u6709\u5c5e\u6027\u4e3a\u5fc5\u987b ",r.a.createElement("code",null,"required")),r.a.createElement(c["a"],{code:"interface Props {\n  a?: number;\n  b?: string;\n}\n\nconst obj1: Props = { a: 5 };\n\nconst obj2: Required<Props> = { a: 5 };\n// Error: property 'b' missing",lang:"ts"}),r.a.createElement("h2",{id:"thistype"},r.a.createElement(l["AnchorLink"],{to:"#thistype","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"ThisType"),r.a.createElement("p",null,"\u8fd9\u4e2a\u5de5\u5177\u4e0d\u4f1a\u8fd4\u56de\u4e00\u4e2a\u8f6c\u6362\u540e\u7684\u7c7b\u578b\u3002\u5b83\u505a\u4e3a\u4e0a\u4e0b\u6587\u7684 ",r.a.createElement("code",null,"this")," \u7c7b\u578b\u7684\u4e00\u4e2a\u6807\u8bb0\u3002\u6ce8\u610f\uff0c\u82e5\u60f3\u4f7f\u7528\u6b64\u7c7b\u578b\uff0c\u5fc5\u987b\u542f\u7528 ",r.a.createElement("code",null,"--noImpliciThis"),"\u3002"),r.a.createElement(c["a"],{code:"// Compile with --noImplicitThis\n\ntype ObjectDescription<D, M> = {\n  data?: D,\n  methods?: M & ThisType<D & M>;  // Type of 'this' in methods is D & M\n}\n\nfunction makeObj<D, M>(desc: ObjectDescriptor<D, M>): D & M {\n  let data: object = desc.data || {};\n  let methods: object = desc.methods || {};\n  return { ...data, ...methods } as D & M;\n}\n\nlet obj = makeObject({\n  data: { x: 0, y: 0 },\n  methods: {\n    moveBy(dx: number, dy: number) {\n      this.x += dx;   // Strongly typed this\n      this.y += dy;   // Strongly typed this\n    }\n  }\n});((\n\nobj.x = 10;\nobj.y = 20;\nobj.moveBy(5, 5);",lang:"ts"}),r.a.createElement("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",r.a.createElement("code",null,"makeObject")," \u53c2\u6570\u91cc\u7684 ",r.a.createElement("code",null,"methods")," \u5bf9\u8c61\u5177\u6709\u4e00\u4e2a\u4e0a\u4e0b\u6587\u7c7b\u578b ",r.a.createElement("code",null,"ThisType<D & M>"),"\uff0c\u56e0\u6b64 ",r.a.createElement("code",null,"methods")," \u5bf9\u8c61\u7684\u65b9\u6cd5\u91cc ",r.a.createElement("code",null,"this")," \u7684\u7c7b\u578b\u4e3a ",r.a.createElement("code",null,"{","x: number, y: number","}"," & ","{"," moveBy(dx: number, dy: number): number","}")),r.a.createElement("p",null,"\u5728 ",r.a.createElement("code",null,"lib.d.ts")," \u91cc\uff0c",r.a.createElement("code",null,"ThisType<T>")," \u6807\u5fd7\u6027\u63a5\u53e3\u662f\u4e2a\u7b80\u5355\u7684\u7a7a\u63a5\u53e3\u58f0\u660e\u3002\u9664\u4e86\u5728\u88ab\u8bc6\u522b\u5bf9\u8c61\u5b50\u68c9\u91cf\u7684\u4e0a\u4e0b\u6587\u7c7b\u578b\u4e4b\u5916\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4e0e\u4e00\u822c\u7684\u7a7a\u63a5\u53e3\u6ca1\u6709\u4ec0\u4e48\u4e0d\u540c\u3002"),r.a.createElement("h2",{id:"parameters"},r.a.createElement(l["AnchorLink"],{to:"#parameters","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Parameters"),r.a.createElement("p",null,r.a.createElement("code",null,"Parameters<T>")," \u6784\u9020\u4e00\u4e2a\u5173\u4e8e\u51fd\u6570\u7c7b\u578b T \u7684 ",r.a.createElement("strong",null,"\u53c2\u6570\u7c7b\u578b")," \u7684\u5143\u7ec4\u7c7b\u578b\u3002"),r.a.createElement(c["a"],{code:"declare function foo(arg: { a: number; b: string }): void;\n\ntype T0 = Parameters<() => string>;\n// []\n\ntype T1 = Parameters<(s: string) => void>;\n// [string]\n\ntype T2 = Parameters<<T>(arg: T) => T>;\n// [unknown]\n\ntype T3 = Parameters<typeof foo>;\n// { a: number, b: string }\n\ntype T4 = Parameters<any>;\n// unknown[]\n\ntype T5 = Parameters<never>;\n// any\n\ntype T6 = Parameters<string>;\n// Error\n\ntype T7 = Parameters<Function>;\n// Error",lang:"ts"}),r.a.createElement("h2",{id:"constructorparameters"},r.a.createElement(l["AnchorLink"],{to:"#constructorparameters","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"ConstructorParameters"),r.a.createElement("p",null,"\u901a\u8fc7 ",r.a.createElement("code",null,"ConstructorParameters<T>")," \u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u63d0\u53d6\u6784\u9020\u51fd\u6570\u7c7b\u578b\u7684\u6240\u6709\u53c2\u6570\u7c7b\u578b\u3002 \u5b83\u4f1a\u751f\u6210\u6784\u9020\u51fd\u6570\u6240\u5177\u6709\u7684\u6240\u6709\u53c2\u6570\u7c7b\u578b\u7684\u5143\u7ec4\u7c7b\u578b\uff08\u5982\u679c T \u4e0d\u662f\u51fd\u6570\uff0c\u5219\u4e0d\u8fd4\u56de\uff09\u3002"),r.a.createElement(c["a"],{code:"/**\n * Obtain the parameters of a constructor function type in a tuple\n */\ntype ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;",lang:"ts"}),r.a.createElement("p",null,"\u793a\u4f8b\uff1a"),r.a.createElement(c["a"],{code:"type T0 = ConstructorParameters<ErrorConstructor>;\n// [(string | undefined)?]\n\ntype T1 = ConstructorParameters<FunctionConstructor>;\n// string[]\n\ntype T2 = ConstructorParameters<RegExpConstructor>;\n// [string, (string | undefined)?]",lang:"ts"}),r.a.createElement("p",null,"\u5b9e\u4f8b\uff1a"),r.a.createElement(c["a"],{code:"class Animal {\n  constructor(name: string, age: number) {\n    return {\n      name,\n      age\n    }\n  }\n}\n\ntype Result = ConstructorParameters<typeof Animal>;\n// type Result = [string, number]",lang:"ts"})))}));n["default"]=e=>{var n=r.a.useContext(l["context"]),t=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:t})}}}]);