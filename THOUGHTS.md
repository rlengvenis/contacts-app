# Design thoughts #

## App structure
* Didn't see the point using "Container" suffix, as all connect components can be search by IDEA quickly
* Have made each name to be unique in the whole project for global search purposes
* No index files due to open tabs with lots of index names visible
* Components are organized by pages.
* Reducers and actions are kept separately  

More reasoning on folder structure: [The 100% correct way to structure a React app (or why there’s no such thing)](https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed)

## State management
* Application state was stored in Redux store. It allows persist state and control its usage and lifecycle independently from components. Bonus is the dev tools with time-traveling/debuging options.
* I have intentionally used ContactListPage React state for storing filter data, as it scoped to one page only and is more of UI state. 
* Redux is used for shared state like notifications or backend server data received.    

## Contacts loading and filtering
* All contacts are loaded fully. I would use this approach until performance issues are met. 
* In case contacts amount reaches > 5000 LazyLoad Components could be used, or backend updated to load result by chunks.
* In general better UX would be to eliminate filter by type (first_name, second_name, etc) and do search through all contacts properties at the same time.   

## BEM
* I have used BEM in order to fix global namespacing issues arising from CSS
* Didn't want to pollute Components with style information as in case of Styled components
