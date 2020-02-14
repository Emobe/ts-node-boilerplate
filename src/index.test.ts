import test from 'tape';
import { hello } from '.';

test('hello() should return correctly', t => {
    const result = hello();
    const expected = 'Hello World!';
    t.deepEqual(result, expected);
    t.end();
});
