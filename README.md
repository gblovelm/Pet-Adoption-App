# adopt-pet
Pet adoption app created using the React library and ecosystem.   
Project objective was to incorporate a number of the features of React into a single app to see how a typical React app fits together.

# Installation
Find/create a directory to store the codebase for the project and cd into it in a terminal window.
Type the following commands:  
    
```
git clone https://github.com/gblovelm/adopt-pet.git
cd adopt-pet
npm i
npm run dev
```
Then navigate to the following to open the app.      
```
http://localhost:1234
```

# Use
1. Select Animal Type from the dropdown.   
2. Select a Breed.   
3. Choose a Theme Colour for the buttons in the app.   
4. Click __'Submit'__ and the app will return some choices.   
5. Select one of the options for more information on your choice.   
6. Click button 'Adopt Me' or return to homepage by clicking on 'Adopt Me' in top left hand corner of window to start again.  
7. Confirm adoption to be taken to the Petfinder website.  


# Design Notes
JSX is used to improve readability. JSX translates HTML tags into *React.createElement* calls.
The app makes asynchronous requests for data from the [Petfinder API][API] using the __useEffect__ React hook. Locations are limited to Seattle, WA and San Francisco, CA in the current version. React Router is used to switch between the two pages of the app - Results and Details. Context is used to enable a site theme to be maintained across different pages as state is effectively global (at the application level) rather than confined to just a component.

__index.html__  top level webpage with a root div and a modal div for the React application  
__App.js__      top level file for the React application.   
__Results.js__  Results page. Formats the data returned from a request to the API.  
__Details.js__  Details page. Modal window opened on button click event.   
__useDropDown.js__  is a custom React hook designed to be a reusable as a stateful dropdown.    
__SearchParams.js__ component that provides a searchbox to enable searching for different facets of pets against the PetFinder API   
__Pet.js__  component to enable renering of a pet  
__Modal.js__  code for the modal window    
__Carousel.js__  Carousel component  
__ErrorBoundary.js__ controls error handling for data coming from the PetFinder API   
__ThemeContext.js__ makes a theme for the app using Context  
__useDropDown.js__ reusable dropdown component that handles all the setting and unsetting of the state.
     
# Tooling
__npm__:      Package manager for node   
__Parcel__:   Bundler for JavaScript projects    
__Prettier__: Tool for standardising code formatting   
__ESLint__:   Code styling enforcement   

The code was developed using the Visual Studio Code source code editor.   


[API]: https://www.petfinder.com/user/login/
