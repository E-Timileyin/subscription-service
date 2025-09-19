import mongoose from "mongoose";

const schema = mongoose.schema({
    name: String,
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    interval: {
        type: String,   
        required: true
    },
    features: {
        type: Array,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const model = mongoose.model("plans", schema)

export default model
