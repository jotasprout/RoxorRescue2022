Submission for #CallForCode
callforcode.org

# Submission Application Information
**Team Name:** RoxorSoxor

**Submission Title:** RoxorRescue

**Submission Summary:**  
Collaborative, centralized, offline-first, search and rescue.

**More Detailed Solution Description**
Application and system for collaborative, offline-first, search and rescue. Users can track structures searched and store data about such S&R which can be shared and synced between users and (after it is developed) between teams of users.

## 5-12 Recon Operations (covered by RoxorRescue)
- Identify buildings
- Structure/hazards marking
- Area/building search
- Search/assessment marking
- Victim location identification
- Sketch search area and record information
- Comunicate findings to appropriate manager

Only item in _US&R-23-FG_ that might not be covered is "Assess void space and atmospheric conditions."

Current vision for app includes these simple tasks. 

**Other Benefits**
- Consistent data structure - in the past, different teams _"often used a derivative of the 'X'. Many improvised their own version, and some may not have used a marking system at all."_ (Miller) Also, from what I've read, there are multiple 'TFW' variants that, to this day, nobody knows the origin of.
- No need to search for where 'X' may have been put by another team
- In such a situation, #offlineFirst is a huge benefit.
- Eliminates cost of spray paint
- Eliminates running out of spray paint 
- Eliminates need to carry bunch of spray paint cans
- Consistent legibility of symbols and information
- Centralization and consolidation of data
- Eliminates having to clean off spray paint

## UX/UI
Here is the current UI/UX concept I scrambled in Photoshop:

<img src="https://github.com/jotasprout/RoxorRescue/blob/master/imgs/UIsketch.jpg" width="500" height=auto alt="Photo of a house with FEMA search symbols overlay">

Hamburger menu in upper-left will contain settings. Image icon in lower-right is for taking pix.

<img src="https://github.com/jotasprout/RoxorRescue/blob/master/imgs/miamiBeachGoogleMap_redGreen.jpg" width="500" height=auto alt="Screenshot of Miami Beach in GoogleMaps. In Photoshop, I added strokes around structures and filled some with green or red">

User can press structure on map to add/update information about search efforts.

Structure closest to user will have a colored border around it.
**THIS NEEDS AN IMAGE**

In Map Display, searched structures identified by color (symbols would be better for accessibility but may be too small to be useful). For example, green indicates a searched structure with no victims (or all victims are living). Red may indicate either dead victims or hazards. Designer(s) need to interview end users such as Search & Rescue team members to determine best design for features like this.

<img src="https://github.com/jotasprout/RoxorRescue/blob/master/imgs/miamiBeachGoogleMap_regions.jpg" width="500" height=auto alt="Similar map of Miami Beach. Two blocks have blue borders">

Map view also used to coordinate teams into regions, supporting them with real-time data.

<img src="https://github.com/jotasprout/RoxorRescue/blob/master/imgs/miamiBeachGoogleMap_searchAss.jpg" width="500" height=auto alt="Similar map of Miami Beach. Structures marked with search assessment symbols">

Alternate or additional markings (taken from _US&R-23-FG_) on map view indicating (from top to bottom):
- "Structure relatively safe for US&R operations.
- "Ongoing search" upon entry into structure.
- Upon exit of initial search.
- Upon exit of initial search with _basic_ symbols for victims and hazards.
- Structure not safe for normal US&R operations. Extensive safety measures must be taken before entry.
- New search completed? This may not be need in app.
- Structure significantly damaged. Shoring/removal of hazards may be required.

Incomplete S&R Markings:
- Filled circle at slashes intersection
- Victim(s) location(s) marking(s). In "real life," markings include direction/arrow and distance but app would need/use the floor/location markings mentioned below
- Box below slash(es) with floor(s) and quadrant(s) searched or "No Entry" if only exterior searched
- "Cross out" marking when victim(s) removed (*see below*)

5-9 INSARAG
- Number of Live victims removed
- Number of Dead victims removed
- Persons unaccounted for

## Sources & Resources

- [National Urban Search & Rescue (US&R) Response System Rescue Field Operations Guide US&R-23-FG](https://www.fema.gov/pdf/emergency/usr/usr_23_20080205_rog.pdf)

- [2003 version](https://www.fema.gov/pdf/emergency/usr/usr_fog_sept_25_2003_color_final.pdf)

There is also something called _Urban Search & Rescue Field Operations Guide (FOG) Edition 8.2 -- September 2017_ that somebody is charging for but I'm sure there's a free, publicly available one somewhere because people are skeezy like that.

- _X Marks the Spot: Decoding the Hurricane Katrina 'X' Through Urban Memory of New Orleans Residents_ by Charles Alan Miller

Concept and purpose of app based on what is commonly referred to as the "Katrina X." The following image is from Wikipedia:

<img src="https://github.com/jotasprout/RoxorRescue/blob/master/imgs/Katrina_x_small.jpg" width="500" height=auto alt="Each diamond contains image about search(es) performed on the house.">

## Other Tools
- [OpenStreetMap](https://www.openstreetmap.org)
- GeoCoder
- turbo thingy
- [GeoCoder](https://geocoding.geo.census.gov/) from .gov 

## Links to Call for Code related stuff
- Noodle thing
- My IBM Coder profile page or whatever

# Solution Roadmap

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
- Reverse GeoCoding for street address of structure (photo would confirm this as sometimes addresses gained like this aren't accurate -- this isn't too bad as _US&R-23-FG_ 5-3 "settles for" using "low numbers" if "no numbers known")
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
Future additions (either to this mobile version or a larger "manager" version) could include:

- Data from all devices and teams consolidated in single database
- Remote, central can see and manage all teams, team members, and regions (optional, for orgs and locales with required infrastructure) and data
- User can input database to which their data should sync
- names & titles of users/team members
- team assignments of users/team members
- Reports, tasks, visual info per _US&R-23-FG_ 5-1 thru 5-4 and 5-13 thru 5-14
- Mobile app could have short menus with editable fields supplemented by a "manager" populating menus with options unique to but standard within disaster region or entity

### Future - Even Further
- Voice activated input for data -- the great part about this is the simplicity of the commands
- Augmented Reality with directional arrows, text, and symbols for hazards, victims, etc.

## IBM Cloud stuff used
- Cloudant (CloudUpps could be a free alternative if cost is a concern -- this app should be free to all who need it)
- Cloud Foundry CLI (now called IBM Cloud CLI?)
- App ID for user registration and profiles?
- Voice Agent with Watson
- Is Watson Assistant a more appropriate tool than Voice Agent?
- AI: Visual Recognition to "auto-fill" new structure when camera sees spray-painted markings or stickers
- Their git thing
- Voice activation and commands -- even interactivity ... AI can ask follow-up questions to data input
- Something that could analyze and update which addresses are searched?
- Could AI use growing data stockpile over time to predict potential hazards? "Warn" and "suggest" re: potential hazards?
- What does Discover do, exactly? Could RoxorRescue potentially, automatically display an existing record or open a new record based on geoLocation (and Visual Recognition?)? User could confirm and continue using Voice?
- Could IoT be used to tell user that a refridgerator or storeroom has food and water so user could inform living victims that can not yet be rescued? Could visual recognition and IoT be used separately or together to then advise whether victims can safely reach that food and water?

## Use and Deployment
[Deploy to IBM Cloud](https://bluemix.net/deploy?repository=https://github.com/jotasprout/RoxorRescue)

# Tests
**Location**
- Latitude & Longitude display **online** using Chrome in MacOS
- Latitude & Longitude display **online** using Firefox Developer Edition (**FDE**) in MacOS
- Latitude & Longitude display **online** using Firefox in Windows 10
- Latitude & Longitude display **online** using Edge in Windows 10
- Latitude & Longitude **offline** display UNTESTED in MacOS
- Latitude & Longitude **offline** display UNTESTED in Android
- Reverse GeoCoding UNTESTED

**Photo**
- Photo taken **online** using Chrome in MacOS
- Photo taken **online** using FDE in MacOS
- Photo taken **online** using Firefox in Windows 10 
- Photo taken **online** using Edge in Windows 10 *however* the image paints with dimensions distorted disproportionately (from "widescreen" to being stretched vertically to fit ... code _is supposed to_ take care of that)
- Video works **online** using Chrome in Android on Galaxy s8 (site not responsive, button not visible, so I couldn't test taking photo)