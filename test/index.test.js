import { Hello } from '../src/js/index'

const name = 'Jest';
let hello;

describe('hello class test', () => {
    beforeEach(() => {
        hello = new Hello(name);
    });

    test('we can check if the name defined the class constructor', () => {
        expect(hello.name).toBe(name);
    });

    test('we can check if console.log() called on say() method', () => {
        const spy = jest.spyOn(console, 'log');
        hello.say();
        // 
        expect(spy).toHaveBeenCalledWith(`hello ${name} World!`);

        spy.mockReset();
        spy.mockRestore();
    });
});