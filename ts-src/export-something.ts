/*
Created by Franz Zemen 11/17/2022
License Type: 
*/
export type SomeType = {name: string, value: string};
export class SomeClass {
  key: string;
  constructor(dumb: number) {
  }
  do() {
    console.log(this.key);
  }
}
export const myConstant = 5;
export function foo() {
  console.log('bar');
}
