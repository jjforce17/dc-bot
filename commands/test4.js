const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'testg4',
    description: "test4",
    async execute(client, message, args, Discord, profileData) {
        client.users.cache.get(profileData.userID).send('test4');
        }
    }