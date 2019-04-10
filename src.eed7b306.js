parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sC8V":[function(require,module,exports) {

},{}],"jzjQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("fs");exports.examples=[{key:"protocols-interfaces-traits",title:"Protocols/interfaces/traits",code:{swift:"protocol Stackable {\n  associatedtype T\n  var items: [T] { get }\n  mutating func push(_ item: T)\n  mutating func pop() -> T?\n  func peak() -> T?\n}\n\nstruct Stack<Element>: Stackable {\n  var items: [Element] = []\n\n  mutating func push(_ item: Element) {\n    items.append(item)\n  }\n\n  mutating func pop() -> Element? {\n    return items.popLast()\n  }\n\n  func peak() -> Element? {\n    return items.last\n  }\n}\n\nvar s1 = Stack<Int>()\ns1.push(1)\ns1.push(2)\ns1.pop()\nprint(s1.peak()!)\n",typescript:"interface Stackable<T> {\n  readonly items: T[];\n  push(item: T): void;\n  pop(): T | null;\n  peak(): T | null;\n}\n\nclass Stack<Element>\n  implements Stackable<Element> {\n  items: Element[] = [];\n\n  push(item: Element) {\n    this.items.push(item);\n  }\n\n  pop() {\n    return this.items.pop() || null;\n  }\n\n  peak() {\n    return this.items.length > 0\n      ? this.items[this.items.length - 1]\n      : null;\n  }\n}\n\nconst s1 = new Stack<number>();\ns1.push(1);\ns1.push(2);\ns1.pop();\nconsole.log(s1.peak());\n",rust:'trait Stackable<T> {\n  fn push(&mut self, item: T) -> ();\n  fn pop(&mut self) -> Option<T>;\n  fn peak(&self) -> Option<&T>;\n}\n\nstruct Stack<T> {\n  items: Vec<T>,\n}\n\nimpl<T> Stackable<T> for Stack<T> {\n  fn push(&mut self, item: T) {\n    self.items.push(item);\n  }\n\n  fn pop(&mut self) -> Option<T> {\n    return self.items.pop();\n  }\n\n  fn peak(&self) -> Option<&T> {\n    return self.items.last();\n  }\n}\n\nimpl<T> Stack<T> {\n  fn new() -> Stack<T> {\n    Stack { items: Vec::new() }\n  }\n}\n\nfn main() {\n  let mut s1 = Stack::new();\n  s1.push(1);\n  s1.push(2);\n  s1.pop();\n  print!("{:?}", s1.peak())\n}\n'}},{key:"higher-order-functions",title:"Higher-order functions",code:{swift:"func map<T, U>(\n  _ arr: [T],\n  _ f: (T) -> U) -> [U] {\n    var result: [U] = []\n    for item in arr {\n        result.append(f(item))\n    }\n    return result\n}\n\nlet newArr = map(\n  [1, 2, 3],\n  { (n: Int) in n * 2 }\n)\nprint(newArr)\n",typescript:"function map<T, U>(\n  arr: Array<T>,\n  f: (item: T) => U\n): Array<U> {\n  const result = [];\n  for (const item of arr) {\n    result.push(f(item));\n  }\n  return result;\n}\n\nconst newArr = map([1, 2, 3], n => n * 2);\nconsole.log(newArr);\n",rust:'fn map<T, U>(\n  arr: Vec<T>,\n  f: &Fn(&T) -> U,\n) -> Vec<U> {\n  let mut result = Vec::new();\n  for item in arr.iter() {\n    result.push(f(item))\n  }\n  return result;\n}\n\nfn main() {\n  let new_vec = map(vec![1, 2, 3], &|n| n * 2);\n  print!("{:?}", new_vec);\n}\n'}},{key:"algebraic-data-types",title:"Algebraic data types",code:{swift:"enum Shape {\n    case Square(side: Double)\n    case Circle(radius: Double)\n}\n\nlet shapes = [\n    Shape.Square(side: 2),\n    Shape.Circle(radius: 4)\n]\n\nfunc getArea(_ shape: Shape) -> Double {\n    switch shape {\n    case .Circle(radius: let r):\n        return Double.pi * r * r\n    case .Square(side: let s):\n        return s * s\n    }\n}\n\nlet totalArea = shapes.reduce(0, {\n    (sum: Double, shape: Shape) in\n    sum + getArea(shape)\n})\n\nprint(totalArea)\n",typescript:"const enum ShapeKind {\n  Square,\n  Circle\n}\n\ninterface Square {\n  kind: ShapeKind.Square;\n  side: number;\n}\n\ninterface Circle {\n  kind: ShapeKind.Circle;\n  radius: number;\n}\n\ntype Shape = Square | Circle;\n\nfunction Square(side: number): Square {\n  return {\n    kind: ShapeKind.Square,\n    side\n  };\n}\n\nfunction Circle(radius: number): Circle {\n  return {\n    kind: ShapeKind.Circle,\n    radius\n  };\n}\n\nconst shapes: Shape[] = [Square(2), Circle(4)];\n\nfunction getArea(shape: Shape) {\n  switch (shape.kind) {\n    case ShapeKind.Square:\n      return shape.side * shape.side;\n    case ShapeKind.Circle:\n      return Math.PI * shape.radius ** 2;\n  }\n}\n\nconst totalArea = shapes.reduce(\n  (sum, shape) => sum + getArea(shape),\n  0\n);\n\nconsole.log(totalArea);\n",rust:'use std::f64::consts::PI;\n\nenum Shape {\n  Square { side: f64 },\n  Circle { radius: f64 },\n}\n\nfn get_area(shape: &Shape) -> f64 {\n  return match shape {\n    Shape::Square { side } => side * side,\n    Shape::Circle { radius } => {\n      PI * radius * radius\n    }\n  };\n}\n\nfn main() {\n  let shapes: Vec<Shape> = vec![\n    Shape::Square { side: 2.0 },\n    Shape::Circle { radius: 4.0 },\n  ];\n\n  let total_area =\n    shapes.iter().fold(0f64, |sum, shape| {\n      sum + get_area(&shape)\n    });\n\n  print!("{:?}", total_area)\n}\n'}}];
},{"fs":"sC8V"}],"3T6a":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.playground={rust:function(t){return"https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=".concat(encodeURIComponent(t))},typescript:function(t){return"https://www.typescriptlang.org/play/index.html#src=".concat(encodeURIComponent(t))},swift:function(t){return"http://online.swiftplayground.run/?sourceURL=data:text/plain,".concat(encodeURIComponent(t))}};
},{}],"9B6d":[function(require,module,exports) {
"use strict";function e(e,o){return t(e)||n(e,o)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(t=(u=i.next()).done)&&(n.push(u.value),!r||n.length!==r);t=!0);}catch(c){o=!0,a=c}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return n}function t(e){if(Array.isArray(e))return e}Object.defineProperty(exports,"__esModule",{value:!0});var o=require("./examples"),a=require("./playground"),u=document.querySelector("#examples");function i(e){var r=o.examples.find(function(r){return r.key===e});if(!r)throw new Error('Example "'.concat(e,'" not found.'));return r}function c(r){for(var n=0,t=Object.entries(r.code);n<t.length;n++){var o=e(t[n],2),i=o[0],c=o[1],l=document.querySelector("#".concat(i));l.querySelector(".code").textContent=c;var f=l.querySelector(".playground-link");f&&(f.href=a.playground[i](c))}u.value=r.key,location.hash=r.key}if(u.innerHTML=o.examples.map(function(e){return'<option value="'.concat(e.key,'">').concat(e.title,"</option>")}).join("\n"),u.addEventListener("change",function(e){c(i(e.target.value))}),location.hash){var l=location.hash.slice(1);c(i(l))}else c(o.examples[0]);
},{"./examples":"jzjQ","./playground":"3T6a"}]},{},["9B6d"], null)
//# sourceMappingURL=https://agentcooper.github.io/swift-typescript-rust/src.eed7b306.js.map