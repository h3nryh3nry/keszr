# Keszr
\[EN\] [opencaching.pl]'s mobile application.

\[PL\] Aplikacja wspomagająca keszowanie na platformie [opencaching.pl].

### Version, status
**Version**: 0.0.6
**Status**: Early stage of development, _proof of concept_

### Build and installation
 - Get the source from repository
 - Get the most recent version of [ionicons.com], and extract the `fonts` folder to `www/lib/ionicframework/fonts/`
 - Create `www/js/apikey.js` file containing definitions of the following global variables: ```CONSUMER_KEY = "your_consumer_key_here";
API_KEY = "your_api_key_here__get_one_from_okapi___";```
 - Import the project into **IntelXDK** (free registration needed) 
 - Build an application using **IntelXDK**

### Development
Want to contribute? Technologies used:
 - IntelXDK as IDE
 - Ionic.js with Cordova
 - Angularjs (as part of ionic stack)
 - Lodash.js
 
As for now, the project is in the "proof-of-concept" stage.
I'd be happy to accept any valuable merge requests (as I am not a _angularjs_ or _ionic hacker_ yet).

### What works?
 - online leafletjs map (each cache type has distinct color)
 - fetching caches near the centre of Poznan from OKAPI
 - displaying log entries of selected caches
 
[opencaching.pl]: <http://www.opencaching.pl>
[ionicons.com]: <http://www.ionicons.com>