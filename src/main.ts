export { scope } from "./scopes/scope.ts"
export { type, ark, arkScope } from "./scopes/ark.ts"
export type { Infer } from "./parse/definition.ts"
export {
    intersection,
    union,
    arrayOf,
    instanceOf,
    valueOf,
    morph,
    narrow,
    keyOf
} from "./scopes/expressions.ts"
export type { Scope, Space } from "./scopes/scope.ts"
export type { Type } from "./scopes/type.ts"
export { Problems, Problem } from "./traverse/problems.ts"
