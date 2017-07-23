## HOME PAGE

- create an array that receives sources upon mouse click
- on re-click removes from array.
- when submit (Get Started) is clicked, check array length is greater than 3.
- sources should be ranked by user?
1. if so go to next PAGE
2. if false should provide message to user that says "pick at least 3 sources"


## ISSUES PAGE

- present issues only from users selected (Trusted Sources) and shows only highest ranked source blurb
1. user can switch blurb by clicking on other source
- populates join table for questions


## RESULTS PAGE

- uses info collected from questions on ISSUES PAGE
- returns true / total percentage

## FORM

- to create ISSUES
• Issue title (for database only)
• Trump side: Position description
• Trump side: Details
• Sources side: Position description
• Sources side: Individual source (ability to add multiple sources for each issue)
1. Source name (cross-referenced to source list)
2. Source blurb (quote or description) for each selected source

## Models

- Sources
- Issues
- Uses
- Questions   issues id:, users id:, response: true|false

- populate arrays for RESULTS PAGE
1. You trust trump
2. You trust them
3. (extras?) For when users click both ways for same source

## other features
- work in google analytics to track user data
- one out of 20 uses get surveyed before and after question
- tracks and saves user data preferred not required
