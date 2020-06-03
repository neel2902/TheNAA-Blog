
# BACKEND DOCUMENTATION

## DataBase

This project uses MongoDB for storing the blogs.
Either run mongodb locally or use mongodb atlas cluster for the database.



## Scripts-Developement

One can initialize and run this project using the commands below:

### `npm run dev-build`

Run this to build the developement project and download all dependencies

### `npm run dev`

Run this to start the developement server

The react app will run at localhost:3000. Proxy is used to send the request sent to react app to the backend server which runs at localhost:PORT.

### Scripts-Production

### `npm run heroku-postbuild`

Run this to build the production project and download all dependencies

### `npm start`

Run this to start the production server

Backend server which runs at url:PORT.

## Enviroment Variables
Add .env file to the project folder with the following contents

NODE_ENV can be `development or production`
PORT = on which to run the backend server, for developement purpose use 5000
NAA_DB_URI = mongodb connection string
NAA_NS = mongodb database name

## Routes

get `/blog/:postType/:postId` : postType can be ['poem','story','article'...] and postId is the \_id field of the blog object

get `/blogs/:postType` : postType is optional

get `/topBlogs/:postType` : postType is optional

post `/addBlog`: with fields (multipart/form) 

requires author or admin to be logged in

1. image
2. title
3. subtitle
4. content
5. type

post `/addAuthor`: with fields (multipart/form)

requires admin to be logged in

1. name
2. image(optional)
3. secret

post `/login` : with fields (multipart/form)

1. name
2. secret


Note: for developement of react app send request to app itself, it will redirect it itself to the correct port


# FRONTEND DOCUMENTATION

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
