module.exports = {
    
        'facebookAuth' : {
            'clientID'      : process.env.CLIENT_ID, // your App ID
            'clientSecret'  : process.env.CLIENT_SECRET, // your App Secret
            'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
            profileFields : ["id", "name", "first_name", "last_name", "username", "gender", "age_range", "displayName", "email"]
        },
    
        'twitterAuth' : {
            'consumerKey'       : 'your-consumer-key-here',
            'consumerSecret'    : 'your-client-secret-here',
            'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
        },
    
        'googleAuth' : {
            'clientID'      : 'your-secret-clientID-here',
            'clientSecret'  : 'your-client-secret-here',
            'callbackURL'   : 'http://localhost:8080/auth/google/callback'
        }
    
    };