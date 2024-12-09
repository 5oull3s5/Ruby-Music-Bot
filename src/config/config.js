require('dotenv').config();


module.exports = {
    token: 'MTMxNTU5MTI0MjQ2OTYwOTUwMw.GJvX2d.-lZVeg_mkBobQFBeT0V6x3lc7O0uLsJixq1UHs',
    clientId: '1273230302822797312',
    guildId: '1106591466651922502',
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    mongoUri: process.env.MONGO_URI,
    spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "AIzaSyD0bJy1Nl9JaUhU97qFhV6lDqyPOCRT-N4",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
