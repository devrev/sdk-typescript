/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Aggregation type to be used while aggregating the metering data for the
 * UOM. 1] Sum - sum of all the values for the meter in a given period Ex.
 * { M1:2, M1:4 } => {M1:6} 2] Minimum - min of all the values for the
 * meter in a given period Ex. { M1:2, M1:4 } => {M1:2} 3] Maximum - max
 * of all the values for the meter in a given period Ex. { M1:2, M1:4 } =>
 * {M1:4} 4] Unique Count - Sum of distinct unique dimension observed for
 * the meter in the given period (not considering the data from the
 * previous billing period) Ex. January {M1:{VM:VM0}}, February
 * {M1:{VM:VM1}, M1:{VM:VM2}, M1:{VM:VM1}} => {M1:2} 5] Running Total -
 * Sum of distinct active unique dimension observed for a meter in the
 * given period, taking into consideration the active data from the
 * previous billing cycle Ex. January {M1:{VM:VM0,on}, {M1:{VM:VM1,off}
 * February {M1:{VM:VM2, on}, M1:{VM:VM2, off}, M1:{VM:VM3, on}} => {M1:3}
 * 6] Duration - Sum of distinct active unique dimension duration for a
 * meter in the given period, taking into consideration the active data
 * from the previous month Ex. January15 {M1:{VM:VM0,on, 4}} February15
 * {M1:{VM:VM0,off}, February18 {M1:{VM:VM1,on,5} => M1->
 * 30*4*charge_per_day + 10*5*charge_per_day 7] Latest - consider the
 * latest/last meter in the given period 8] Oldest - consider the
 * oldest/first record in the given period.
 */
export type AggregationDetailAggregationType =
    | "duration"
    | "latest"
    | "maximum"
    | "minimum"
    | "oldest"
    | "running_total"
    | "sum"
    | "unique_count";

export const AggregationDetailAggregationType = {
    Duration: "duration",
    Latest: "latest",
    Maximum: "maximum",
    Minimum: "minimum",
    Oldest: "oldest",
    RunningTotal: "running_total",
    Sum: "sum",
    UniqueCount: "unique_count",
} as const;