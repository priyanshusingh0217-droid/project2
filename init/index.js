const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_url ="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("conneted to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_url);
}
const initDB = async () => {
    await Listing.deleteMany({});

    initdata.data = initdata.data.map((obj) => ({
        ...obj,
        owner: "6aab9031b6ecc31fbb57ca72"
    }));

    await Listing.insertMany(initdata.data);

    console.log("data was initialized");
};


initDB();