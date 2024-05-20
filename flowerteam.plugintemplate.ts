/*
Flower plugin example/template
*/

import { FlowerMeta, FlowerAPI, LogSource, BasePlugin } from "@flowerloader/api";
import { GameDataCOAW } from "@flowerloader/coawtypes";

export const META: FlowerMeta =
{
    GUID: "flowerteam.plugintemplate",
    VERSION: "1.2.0",
    NAME: "Flower Plugin Template",
    ENABLED: true
};

export default class Plugin extends BasePlugin<GameDataCOAW>
{
    Awake()
    {
        this.logger.write("Awake");
    }

    /**
     * Uncomment this to add code to your constructor
     * Make sure to always call your base constructor via super()
     * 
    constructor(flower: FlowerAPI<GameDataCOAW>, logger: LogSource)
    {
        super(flower, logger);
        this.logger.write("Loaded");
    }
    */
}