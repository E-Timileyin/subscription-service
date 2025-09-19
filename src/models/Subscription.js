import mongoose from "mongoose";

const schema = mongoose.schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "plans",
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["active", "inactive", "cancelled", "pending"],
        default: "active"
    },
    startDate: {
        type: Date,
        required: true,
        default: () => Date.now()
    },
    endDate: {
        type: Date,
        required: true,
        default: () => Date.now()
    },
    autoRenew: {
        type: Boolean,
        default: true
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payments",
        required: true,
    }
})

const model = mongoose.model("subscriptions", schema)

export default model
