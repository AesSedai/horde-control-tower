# Changelog

### Version 0.0.5 - 04/19/2023
- Added ability to look up users with well-formed names instead of just numeric id
  - Example format: <string>#<number>, eg: `Aes Sedai#200`
  - Under the hood, the string portion is stripped out and just the number is used for user lookup
- Disabled the ability to search for the Anonymous#0 user, since it has over 2100 workers and causes a request flood / OOM issue in browser

### Version 0.0.4 - 04/15/2023
- Added Ratings tab
- Reworked User Lookup to show workers + ratings
- Added ability to flag user ratings

### Version 0.0.3 - 04/08/2023
- Added Worker Type selector to Workers panel (image, interrogation, and text)
- Fixed an issue caused by lexical sorting when sorting by performance key, now it is numerically parsed
- Small service name refactor to reflect update from stableHorde to aiHorde

### Version 0.0.2 - 03/01/2023
- Added Bridge Agent to worker card
- Added Bridge Agent to worker list filtering, and as a Sort Key
