module.exports = {
    
        'facebookAuth' : {
            'clientID'      : process.env.CLIENT_ID, // your App ID
            'clientSecret'  : process.env.CLIENT_SECRET, // your App Secret
            'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
            profileFields : ["id", "name", "first_name", "last_name", "username", "gender", "age_range", "displayName", "email"]
        },
    
        'twitterAuth' : {
            'consumerKey'       : process.env.TWITTER_CONSUMER_KEY,
            'consumerSecret'    : process.env.TWITTER_CONSUMER_SECRET,
            'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
        },
    
        'googleAuth' : {
            'clientID'      : process.env.GOOGLE_CLIENT_ID,
            'clientSecret'  : process.env.GOOGLE_CLIENT_SECRET,
            'callbackURL'   : 'http://localhost:3000/auth/google/callback'
        }
    
    };