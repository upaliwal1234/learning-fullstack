import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        diagnosedWith: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true
        },
        bloodGroup: {
            type: String,
            requried: true
        },
        gender: {
            type: String,
            enum: ["M", "F", "O"],
            requried: true
        },
        admittedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    }, { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);