const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg6',
    description: "testg6",
    async execute(client, message, args, Discord, profileData) {
        const user = args[0];
        client.users.cache.find(u => u.id === user);
    }
}

