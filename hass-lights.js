function run(runRequest) {
    const http = require('http')

    // For logging stuff
    let logger = runRequest.modules.logger;
    
    // The hostname (IP address or URL) of your Home Assistant instance
    let hostname = runRequest.parameters.hostname
    
    // The long-lived access token generated through Home Assistant (on your profile page)
    let api_token = runRequest.parameters.token;

    // The light colour as extracted from the chat
    let light_colour = runRequest.trigger.metadata.userCommand.args[0];
    
    // The entity_id of the light you wish to control
    let light_id = runRequest.parameters.light;
    
    // Make a request that will call the API, with our token, and our parameters
    let req = http.request({
        hostname: hostname,
        path: '/api/services/light/turn_on',
        port: 8123,
        headers: {
            'Authorization': 'Bearer ' + api_token,
            'Content-Type': 'application/json'
        },
        method: 'post'
    })

    // Here, we can either use a named colour (any CSS colour name will work), or use "rainbow" to colorloop through the lights (Philips Hue only?)
    switch(light_colour) {
        case "rainbow":
            logger.debug("Rainbow Loop")
            req.write(JSON.stringify({
                'entity_id': light_id,
                'effect': "colorloop"
            }))
            break;
        default:
            logger.debug("Setting colour to " + light_colour)
            req.write(JSON.stringify({
                'entity_id': light_id,
                'color_name': light_colour
            }))
            break;        
    }
   
    req.end()
}

function getScriptManifest() {
    return {
        name: "Home Assistant Light Script",
        description: "Changes the colour of a light set up through Home Assistant",
        author: "Grayda",
        version: "1.0",
        firebotVersion: "5",
    };
}

function getDefaultParameters() {
    return new Promise((resolve, reject) => {
        resolve({
            "hostname": {
                "type": "string",
                "description": "The hostname of your Home Assistant instance"
            },
            "token": {
                "type": "string",
                "description": "The long-lived token to use"
            },
            "light": {
                "type": "string",
                "description": "Which light to use in Home Assistant"
            }
        });
    });
}

exports.getDefaultParameters = getDefaultParameters;
exports.getScriptManifest = getScriptManifest;
exports.run = run;
