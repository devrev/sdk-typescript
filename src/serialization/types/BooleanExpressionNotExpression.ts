/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const BooleanExpressionNotExpression: core.serialization.ObjectSchema<
    serializers.BooleanExpressionNotExpression.Raw,
    DevRev.BooleanExpressionNotExpression
> = core.serialization.object({
    expression: core.serialization.lazy(() => serializers.BooleanExpression),
});

export declare namespace BooleanExpressionNotExpression {
    interface Raw {
        expression: serializers.BooleanExpression.Raw;
    }
}
