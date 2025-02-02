import * as assert from "node:assert/strict"
import { hasDomain } from "../../../src/utils/domains.ts"
import type { AssertionContext } from "./attest.ts"

export type ThrowAsertionErrorContext = {
    message: string
    expected?: unknown
    actual?: unknown
    ctx: AssertionContext
}

export const throwAssertionError = ({
    ctx,
    ...errorArgs
}: ThrowAsertionErrorContext): never => {
    const e = new assert.AssertionError(errorArgs)
    e.stack = ctx.assertionStack
    throw e
}

export const assertEquals = (
    expected: unknown,
    actual: unknown,
    ctx: AssertionContext
) => {
    if (expected === actual) {
        return
    }
    if (hasDomain(expected, "object") && hasDomain(actual, "object")) {
        try {
            assert.deepStrictEqual(actual, expected)
        } catch (e: any) {
            e.stack = ctx.assertionStack
            throw e
        }
    } else {
        // some nonsense to get a good stack trace
        try {
            assert.strictEqual(actual, expected)
        } catch (e: any) {
            e.stack = ctx.assertionStack
            throw e
        }
    }
}
