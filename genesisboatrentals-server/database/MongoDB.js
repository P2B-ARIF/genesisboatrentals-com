const { default: mongoose } = require("mongoose");

exports.databaseConnect = async () => {

    try {
        const { connection } = await mongoose.connect(
            "mongodb+srv://boatrentals1111:boatrentals1111@cluster0.sxaoekd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            { dbName: "boatrentals" },
        );
        console.log(`✅ database connected at ${connection.host}`)
    } catch (error) {
        console.log('⛔ database not connected.')
    }


};
