import mongoose from "mongoose";
import { UniversitySchema } from "../models/crm.Models";
const University = mongoose.model("University", UniversitySchema);

export const addUniversity = (req, res) => {
    let newUniversity = new University(req.body);
    newUniversity.save((err, contact) => {
        err && res.send(err);
        res.json(contact);
    });
};
export const getUniversities = (req, res) => {
    University.find({}, (err, Uni) => {
        err && res.send(err);
        res.json(Uni);
    })
}
// show me code for searchUniversityViaCountry

export const searchUniversityViaCountry = (req, res) => {
    University.find({ country: req.params.country }, (err, universities) => {
        err && res.send(err);
        res.json(universities);
    })
}