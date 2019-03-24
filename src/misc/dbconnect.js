const mongoose = require('mongoose');

const connect = (user, password, name) => {
	mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-c1zrd.gcp.mongodb.net/${name}?retryWrites=true`,
		{ useNewUrlParser: true },
	);
};

const disconnect = () => {
    mongoose.connection.close();
}

module.exports = {
    connect,
    disconnect,
};