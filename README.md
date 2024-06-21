# TmdbApp

A React Native Mobile Application built as a proof of concept for my goal of learning React Native at my job at Fluxit. After completing the course [React Native - The Practical Guide [2024]](https://www.udemy.com/course/react-native-the-practical-guide/?couponCode=D_0424), I used the **TMDB API** to create an app that displays movies using the knowledge gained in **React Native** and the **Expo** tool.

![Logo 885x256](https://github.com/RNicolasMarin/TmdbApp/assets/69260571/6ea6cf3a-0af9-4869-9679-f31a42d3270b)

## Screens

- HomeScreen
- MovieListScreen
- MovieDetailsScreen

### HomeScreen

The first screen when entering the app shows different categories of movies, one below the other. Each category has:
- A name,
- A list with the first 8 movies,
- A **More** button to go to the **MovieListScreen** and see more movies from that category.

While the movies for each category are loading, it shows 3 items with a shimmer effect to display a loading effect and avoid abrupt changes on the screen when the response is received.

Each category is represented by the **HorizontalMovieList** component.

https://github.com/RNicolasMarin/TmdbApp/assets/69260571/a6d80bdf-0245-4824-97bd-a2890fa8fd57

### MovieListScreen

The next screen shows:
- The name of a category,
- A list with 2 columns displaying the movies from that category.

The query to get the movies returns groups of 20, and when you reach the end of the list, a spinner is displayed while the next group is being fetched.

https://github.com/RNicolasMarin/TmdbApp/assets/69260571/9a9cabf8-38f4-4578-ae6f-bdd0be33d1ab

### MovieDetailsScreen

This final screen shows various details of a movie, including:
- Image
- Synopsis
- Genres
- Production studios
- Release date
- Production countries
- Languages
- Status
- Link to the official page

When you enter the screen, a query is made to get the details, and in the meantime, the same shimmer effect is displayed in each section of the screen. 
When you touch the link from the official page, a web browser app opens to show the page. 

This screen can be accessed from either of the previous two screens by simply tapping on a movie from the lists.

https://github.com/RNicolasMarin/TmdbApp/assets/69260571/5bd79cdd-5321-4157-b969-5fc2f1bcdeb6

https://github.com/RNicolasMarin/TmdbApp/assets/69260571/5c625127-0e69-40f2-8b43-de4f9f3bb20c


## Built with

* **JavaScript**: Programming language used to build the app.
* **React Native**: Mobile App Framework used to build the app.
* **Expo**: Open-source platform used to assist in building the app.
* **Axios**: HTTP client library used to fetch data about the movies.
* **useState**: React Hook used to manage the state (loading, error, or success with some information) of the data being requested.
* **useEffect**: React Hook used to launch the functions needed to request data.
* **useLayoutEffect**: React Hook used to set the title from the navigation whenever the UI is ready.
* **ShimmerEffect and LinearGradient**: Libraries used to show shimmer effects while any data is being fetched.
* **TMDB API**: REST API used to get information about the movies shown on the app.
* **StatusBar**: Library used to handle any StatusBar-related configuration.
* **react-navigation, react-navigation-stack, and react-navigation-native**: Libraries used to handle anything related to the navigation between screens in the app.


## Lessons Learned

What I learned from this project was how to build a mobile app using the React Native framework. The course I followed was very comprehensive and showed several example apps that included different features and use cases, which gave me a solid foundation to start with.

React Native was something I've always been curious about but never had the chance to practice until now. I particularly liked that some concepts I got to apply were familiar from Native Android development. For instance:
- Working with Visual Components to create the UI (similar to Compose).
- Having classes to manage the state (like with Live Data, StateFlow, or State) and to show effects on the screen (similar to SharedFlow or Channels).
- Working with the navigation classes to define different screens, navigate between them, and pass parameters.


## Run Locally

To run the app, you need to clone the project, navigate inside the project directory, and use the following command in the terminal:

```
npm start
```

Since the app uses the **The Movie Database** API, you need to go to the website, log in, create an access key, and add it to the **WebConstants** file in the *ACCESS_TOKEN_TOKEN* constant. With that, the app should work, and you just need to download the **Expo Go** app on your phone and scan the QR code from the terminal to open the application.


## Roadmap

In the future, I may work on a next version, in which I could include:
- Error handling cases,
- Caching data locally,
- Authentication features,
- Displaying other types of information that the API offers on new screens.


## Feedback

If you have any feedback, please reach out to me at [LinkedIn](https://www.linkedin.com/in/rnicolasmarin/).
