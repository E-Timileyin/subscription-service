import mongoose from "mongoose";

const schema = mongoose.schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    createAt: {
        type: Date,
        immutable: true,
        default: () => Date.now,
    },
    subscription: {
        plan: String,
        autoRenew: Boolean,
        startDate: Date,
        endDate: Date,
        status: String,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
})

const model = mongoose.model("users", schema)

export default model;