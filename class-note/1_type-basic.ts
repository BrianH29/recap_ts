// js 문자열 선어
const str = 'hello';

//ts 문자열 선언
const str2: string = 'hello';

//ts 문자열 숫자
const num: number =10; 

//ts 문자열 배열
const arr: Array<number> = [1,2,3];
const heroes: Array<string> = ['Capt','Thor','Hulk', 10];

// array literal
let items: number[] = [1,2,3];

// TS 튜플 - 배열의 특정 순서에 타입 정의
let address: [string, number] = ['gangname', 10];

//TS 객체
let obj : object = {};
let person : object = {
  name : 'john',
  age: 10,
}

let person2 : { name :string, age: number} = {
 name : 'ellie',
 age: 20,
}

//TS 진위 값
let show : boolean = true;