# firebot-hass-lights
A Firebot script that lets you control lights set up through Home Assistant

To use it, drop the javascript file into your scripts folder (e.g. %AppData%\Firebot\v5\Profiles\Main Profile\scripts) and turn on custom scripts in Firebot's settings. Then in a command (e.g. `!lights`), select the "Custom Script" effect

You need to provide three things:

 1. A long-lived access token (accessible via your user profile, bottom left corner of the dashboard)
 2. The entity_id of the light you wish to control (e.g. `light.davids_room`)
 3. The hostname or URL of your instance (e.g. 192.168.1.128)

If you created the command `!lights`, you can then call `!lights red`, and the light will turn red. You can also call `!lights rainbow` to activate the `colorloop` effect (if supported by your lights). Home Assistant will accept any named colour used in CSS. For a list of available colours, see [this list](https://www.w3.org/wiki/CSS/Properties/color/keywords).

If you've created a [light group](https://www.home-assistant.io/integrations/group/) in Home Assistant, you can use that as well. You could also probably control switches or other devices too with a command such as `!switch On` or `!switch Off`, but this is untested. 

