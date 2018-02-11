# Design thoughts #

## App structure
Rules applied: 
* File names unique in whole project (boost effective search);
* No index files for components (meaningful names in open tabs);
* Components are organized by pages, closely related components are put inside, else in shared;

>More reasoning on folder structure: [The 100% correct way to structure a React app (or why there’s no such thing)](https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed)

## Unit Tests
Sample examples implemented are:
* ContactListPage.test.js;
* notificationsReducer.test.js;
* contactActions.test.js;

## State management
Redux state management is used:
* Used for shared state like notifications and backend server data received; 
* Allows persist state and control its usage and lifecycle independently from components; 
* Provides dev tools with time-traveling/debugging options;

## Contacts loading and filtering
Fetched contacts are loaded fully. I would use this approach until performance issues are met. 

Better UX would be to eliminate filter by type (first_name, second_name, etc) and do search through all the type properties at once.

In case contacts amount reaches > 5000 and either page component or server downgrades in performance:
* Use LazyLoad Components
* Update backend to load results by chunks   

## BEM
Reasons:
* BEM is used in order to fix global name spacing issues arising from CSS.
* Don't pollute components with style information as in case of Styled components.
