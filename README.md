# firebot-hass-lights
A Firebot script that lets you control lights set up through Home Assistant

To use it, drop it into your scripts folder (e.g. %AppData%\Firebot\v5\Profiles\Main Profile\scripts) and turn on custom scripts in Firebot's settings. Then in a command (e.g. `!lights`), select the "Custom Script" effect

You need to provide three things:

 1. A long-lived access token (accessible via your user profile, bottom left corner of the dashboard)
 2. The entity_id of the light you wish to control (e.g. `light.davids_room`)
 3. The hostname or URL of your instance (e.g. 192.168.1.128)

If you created the command `!lights`, youc can call `!lights red`, and the light will turn red. You can also call `!lights rainbow` to activate the `colorloop` effect (Philips Hue lights only?)

If you've created a light group, you can also call that`
