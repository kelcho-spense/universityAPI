import mongoose from "mongoose";
const Schema = mongoose.Schema;
export const UniversitySchema = new Schema({
    name: {
        type: String,
        required: "Enter Name",
    },
    country: {
        type: String,
        required: "Enter country",
    },
    alpha_two_code: {
        type: String,
        required: "Enter alpha_two_code",
    },
    web_pages: {
        type: Array,
        required: "Enter web_pages",
    },
    domains: {
        type: String,
        required: "Enter domains",
    },
}, { timestamps: true })