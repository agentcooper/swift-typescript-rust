parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sC8V":[function(require,module,exports) {

},{}],"9B6d":[function(require,module,exports) {
"use strict";exports.__esModule=!0;for(var n=require("fs"),t={rust:'trait Stackable<T> {\n  fn push(&mut self, item: T) -> ();\n  fn pop(&mut self) -> Option<T>;\n  fn peak(&self) -> Option<&T>;\n}\n\nstruct Stack<T> {\n  items: Vec<T>,\n}\n\nimpl<T> Stackable<T> for Stack<T> {\n  fn push(&mut self, item: T) {\n    self.items.push(item);\n  }\n\n  fn pop(&mut self) -> Option<T> {\n    return self.items.pop();\n  }\n\n  fn peak(&self) -> Option<&T> {\n    return self.items.last();\n  }\n}\n\nimpl<T> Stack<T> {\n  fn new() -> Stack<T> {\n    Stack { items: Vec::new() }\n  }\n}\n\nfn main() {\n  let mut s1 = Stack::new();\n  s1.push(1);\n  s1.push(2);\n  s1.pop();\n  print!("{:?}", s1.peak())\n}\n',swift:"protocol Stackable {\n  associatedtype T\n  var items: [T] { get }\n  mutating func push(_ item: T)\n  mutating func pop() -> T?\n  func peak() -> T?\n}\n\nstruct Stack<Element>: Stackable {\n  var items: [Element] = []\n\n  mutating func push(_ item: Element) {\n    items.append(item)\n  }\n\n  mutating func pop() -> Element? {\n    return items.popLast()\n  }\n\n  func peak() -> Element? {\n    return items.last\n  }\n}\n\nvar s1 = Stack<Int>()\ns1.push(1)\ns1.push(2)\ns1.pop()\nprint(s1.peak()!)\n",typescript:"interface Stackable<T> {\n  readonly items: T[];\n  push(item: T): void;\n  pop(): T | null;\n  peak(): T | null;\n}\n\nclass Stack<Element> implements Stackable<Element> {\n  items: Element[] = [];\n\n  push(item: Element) {\n    this.items.push(item);\n  }\n\n  pop() {\n    return this.items.pop() || null;\n  }\n\n  peak() {\n    return this.items.length > 0 ? this.items[this.items.length - 1] : null;\n  }\n}\n\nconst s1 = new Stack<number>();\ns1.push(1);\ns1.push(2);\ns1.pop();\nconsole.log(s1.peak());\n"},e={rust:function(n){return"https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code="+encodeURIComponent(n)},typescript:function(n){return"https://www.typescriptlang.org/play/index.html#src="+encodeURIComponent(n)},swift:function(n){return"http://online.swiftplayground.run/?sourceURL=data:text/plain,"+encodeURIComponent(n)}},s=0,p=Object.entries(t);s<p.length;s++){var i=p[s],u=i[0],a=i[1],l=document.querySelector("#"+u),r=l.querySelector(".code");r.textContent=a;var o=l.querySelector(".playground-link");o&&(o.href=e[u](a))}
},{"fs":"sC8V"}]},{},["9B6d"], null)
//# sourceMappingURL=/src.4e0ead2b.js.map