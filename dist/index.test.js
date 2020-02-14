"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape_1 = __importDefault(require("tape"));
const _1 = require(".");
tape_1.default('hello() should return correctly', t => {
    const result = _1.hello();
    const expected = 'Hello World!';
    t.deepEqual(result, expected);
    t.end();
});
//# sourceMappingURL=index.test.js.map