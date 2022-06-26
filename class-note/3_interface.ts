interface User {
  age: number,
  name: string,
  gender: string,
}

//변수에 인터페이스 활요
var john : User ={
  age: 21,
  name: '존',
  gender: 'male'
}

//함수에 인터페이스 활용
function getUser(user: User): void{
  console.log(user);
}

const sam = {
  age : 31,
  name : '샘',
  gender : 'male',
}

getUser(sam);

//함수의 스팩(구조)에 인터페이스 활용
interface SumFunction {
  //인자 정의
  ( a: number, b: number): number
}

var sum : SumFunction;
sum = function(a: number, b: number) : number {
  return a + b;
}

//인텍싱
// 속성 이름이 정해져 있지 않고 StringArray라는 인터페이스를 사용할때 
// 그때 그때 속성을 임의로 구현 할 수 있는 것.
interface StringArray {
  [index: number] : string
}

var arr = ['a','b','c'];
arr[0] = '1';

//인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string] : RegExp //정규표현식
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  // cssFile: 'css' Type 'string' is not assignable to type 'RegExp'.ts(2322)
  cssFile : /\.css$/,
  jsFile: /\.js$/,
}

//Type 'string' is not assignable to type 'RegExp'.ts(2322)
// obj['cssFile'] = 'a'; 

Object.keys(obj).forEach(function(value){

})