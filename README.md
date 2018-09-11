# RoxorRescue
Submission for #CallForCode
callforcode.org

[Deploy to IBM Cloud](https://bluemix.net/deploy?repository=https://github.com/jotasprout/RoxorRescue)

Application and system for collaborative, offline-first, search and rescue. Users can track structures searched and store data about such S&R which can be shared and synced between users and (after it is developed) between teams of users.

In such a situation, #offlineFirst is a huge benefit.

Here is the current UI/UX concept I scrambled in Photoshop:

![Photo of a house with FEMA search symbols overlay](https://github.com/jotasprout/RoxorRescue/blob/master/imgs/UIsketch.jpg)

Hamburger menu in upper-left will contain settings. Image icon in lower-right is for taking pix.

![Screenshot of Miami Beach in GoogleMaps](https://github.com/jotasprout/RoxorRescue/blob/master/imgs/miamiBeachGoogleMap.png)
User can press structure on map to add/update information about search efforts.

![Similar map of Miami Beach with some structures colored in green or blue](https://github.com/jotasprout/RoxorRescue/blob/master/imgs/miamiBeachGoogleMap_redGreen.jpg_)
In Map Display, searched structures identified by color (symbols would be better for accessibility but may be too small to be useful). For example, green indicates a searched structure with no victims (or all victims are living). Red may indicate either dead victims or hazards. Designer(s) need to interview end users such as Search & Rescue team members to determine best design for features like this.

![Similar map of Miami Beach. Two blocks have blue borders](https://github.com/jotasprout/RoxorRescue/blob/master/imgs/miamiBeachGoogleMap_regions.png)
Map view also used to coordinate teams into regions, supporting them with real-time data.

## Sources & Resources

[National Urban Search & Rescue (US&R) Response System Rescue Field Operations Guide US&R-23-FG](https://www.fema.gov/pdf/emergency/usr/usr_23_20080205_rog.pdf)

[2003 version](https://www.fema.gov/pdf/emergency/usr/usr_fog_sept_25_2003_color_final.pdf)

There is also something called _Urban Search & Rescue Field Operations Guide (FOG) Edition 8.2 -- September 2017_ that somebody is charging for but I'm sure there's a free, publicly available one somewhere because people are skeezy like that.

Concept and purpose of app based on what is commonly referred to as the "Katrina X." The following image is from Wikipedia:

![Each diamond contains image about search(es) performed on the house.](https://github.com/jotasprout/RoxorRescue/blob/master/imgs/Katrina_x_small.jpg)

## IBM Cloud stuff used
- Cloudant (CloudUpps could be a free alternative)
- Wherever "Deploy" stores stuff
- Their git thing
- Something that could analyze and update which addresses are searched?

## Other Tools
- [OpenStreetMap](https://www.openstreetmap.org)
- GeoCoder
- turbo thingy
- [GeoCoder](https://geocoding.geo.census.gov/) from .gov 

## Links to Call for Code related stuff
- Noodle thing
- My IBM Coder profile page or whatever

## Features - Current
- Displays date
- Displays time
- Displays Longitude & Latitude
- Hold up device camera toward structure for address (using device sensors, geolocation, and potential APIs)

### Current - Completed

### Current - In Development
- Use camera to take photo for BG and confirmation of address by comparing to data and other photos
- X-Code overlaid onto image of structure

### Future - Near

- Could incorporate data and interactive UI via augmented reality in personell equipment
- Indications of areas with power outages and/or power returned
- Displays map of area based on an API
- Shows user location on map
- Indicates which houses have been searched (complete or incomplete) via "filled" or "empty" outline (first idea is these outlines are based on those in GoogleMaps)
- Set a region to search by creating polygon path on GoogleMap (or whatever)
- Method to create region (at the moment, I think) is pressing four (or three or five) streets to enclose an area on the map
- Above method creates list of structures
- Above list used to confirm addresses and display completion (percent and/or X of Y)
- Assign a region to a S&R team
- Data stored on local device
- Data syncs with other users (essential)

### Future - "Far"
- Data from all devices and teams consolidated in single database
- Remote, central can see and manage all teams, team members, and regions (optional, for orgs and locales with required infrastructure) and data
- User can input database to which their data should sync