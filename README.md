# minecraft-house-sync
A series of scripts to sync my house lights with my Minecraft server's time of day

## Demonstration
[![Video thumbnail](https://raw.githubusercontent.com/OverloadUT/minecraft-house-sync/master/resources/videothumb.jpg)](https://www.youtube.com/watch?v=dCNiezW5QH4)

# Parts
* **ComputerCraft** : An in-game computer is used to write the current time of day to an in-game file, which happens to also write a real-life file.
* **Node** : A simple node script watches the time-of-day file for changes, and sends the time info to an ISY994i controller.
* **ISY** : An ISY994i home automation controller runs a series of "programs" to do the actual logic of fading the lights in and out. An XML file with the programs is included in this repo, although it's only half of the equasion: a series of scenes need to be set up, but they cannot be exported from the ISY config.
