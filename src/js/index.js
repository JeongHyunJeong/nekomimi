// @flow
export class Hello {
  name : string;

  constructor(name : string) {
    this.name = name;
    this.say();
  }

  say() {
    console.log(`hello ${this.name} World!`);
  }
}

export default new Hello('nekochan');
