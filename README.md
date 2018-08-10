# In The Loop

## Table of Contents

---

- [Project description](#desc)
- [How to use](#how)
- [What we used](#tech)
- [Team members](#team-members)
- [Demo](#demo)
- [Future development](#future)

## <a name="dec"></a>Project description

---

> _In The Loop is a fully responsive, React.js/MongoDB/Mongoose/Node.js/Express/Axios MVC web app that was built in a few days as a full-stack coding project._

**Your friends have all moved, but you just can’t move on...**

In The Loop is a web app designed for users that want to keep-in-touch with people all over the world.

The purpose of this app is to help users keep track / better connect with their remote friends.

A user can input his friends location and the app will display information from where they are such as: current temperature, latest news headlines and a personal note / reminder that the user added to help him remember an event / topic of conversation to follow up on / meaningful event in his friend life.

> _Check out the repo [**Wiki**](https://github.com/sam-pop/inTheLoop/wiki) section for detailed user-stories, database diagrams & file structure._

## <a name="how"></a>How to use

---

First, Make sure you have [mongoDB Community Server](https://www.mongodb.com/download-center?jmp=nav#community) installed on your machine.

Then clone this repo by running the command:
`git clone https://github.com/sam-pop/inTheLoop.git`.

From the command line run `npm install` to install all required dependencies from the `package.json` file.

Navigate to `cd client\` and run `yarn install`.

Make sure your mongoDB server service is running and that you are in the root directory of the project. Then from the command line run `npm run dev` to start the client server (react) at `localhost:3000` (and the API server at `localhost:3001`).

## <a name="tech"></a>What we used

**Back-end:**

- [Node.JS](https://www.npmjs.com/)
- [Body-parser (body parsing middleware)](https://www.npmjs.com/package/express-handlebars)
- [Express](https://www.npmjs.com/package/express)
- [Express-session (session middleware)](https://www.npmjs.com/package/express-session)
- [Passport](https://www.npmjs.com/package/passport)
- [Passport-local (authentication strategy)](https://www.npmjs.com/package/passport-local)
- [bcrypt-nodejs (password hashing)](https://www.npmjs.com/package/bcrypt-nodejs)
- MongoDB
- [mongoose](http://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [axios](https://www.npmjs.com/package/axios)

**Font-end:**

- HTML5
- CSS
- [Bootstrap (v4.1)](https://getbootstrap.com/)
- Javascript
- [Leaflet (JS interactive mapping library)](https://leafletjs.com/)
- [React](https://reactjs.org/) (utlizing react-dom, react-leaflet, react-router and react-user-avatar)

## <a name="team-members"></a>Team members

---

- [Salma Al-Qathab](https://github.com/Salmaalqathab)
- [Martina Caputy](https://github.com/mecaputy)
- [Samuel Poplovitch](https://github.com/sam-pop/)
- [Nima Chenari](https://github.com/nchenari)

## <a name="demo"></a> Demo

---

[![Screenshot](https://s33.postimg.cc/80q39b1a7/screen_Grab1.gif)](https://postimg.cc/image/6loikl06z/)

## <a name="future"></a> Future development

---

- Updated design elements
- Additional components i.e. holidays
- Adding users and user authentication
- React native mobile app
