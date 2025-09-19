import mongoose from "mongoose";

const schema = mongoose.schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    subscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subscriptions",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        default: "USD"
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "completed", "failed"],
        default: "pending"
    },
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    paymentDate: {
        type: Date,
        required: true
    },
    provider: {
        type: String,
        required: true
    }, // stripe, paystack
})


const model = mongoose.model("payments", schema)

export default model