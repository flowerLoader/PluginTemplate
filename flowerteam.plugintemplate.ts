/*
Flower plugin example/template
*/

import { FlowerAPI } from "@flowerloader/api/FlowerAPI";
import { FlowerPlugin } from "@flowerloader/api/FlowerPlugin";
import { LogSource } from "@flowerloader/api/logSource";

export const Plugin: FlowerPlugin =
{
    GUID: "flowerteam.plugintemplate",

    VERSION: "1.0.0",

    NAME: "Flower Plugin Template",

    ENABLED: false,

    flower: {} as FlowerAPI,
    logger: {} as LogSource,

    PluginRegistered: function (flower, logger)
    {
        Plugin.flower = flower;
        Plugin.logger = logger;
        Plugin.logger.write("Loaded");
    },

    PluginAwake: function ()
    {
        Plugin.logger.write("Awake");
    },

}