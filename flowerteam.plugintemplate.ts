/*
Flower plugin example/template
*/

import { FlowerMeta, IFlowerPlugin, FlowerAPI, LogSource } from "@flowerloader/api";

export const META: FlowerMeta =
{
    GUID: "flowerteam.plugintemplate",
    VERSION: "1.0.0",
    NAME: "Flower Plugin Template",
    ENABLED: true
};

export default class Plugin implements IFlowerPlugin
{

    flower: FlowerAPI
    logger: LogSource

    Awake()
    {
        this.logger.write("Awake");
    }

    constructor(flower: FlowerAPI, logger: LogSource)
    {
        this.flower = flower;
        this.logger = logger;
        this.logger.write("Loaded");
    }
}