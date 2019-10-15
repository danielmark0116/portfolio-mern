# MY PORTFOLIO

---

###### Full stack MERN stack app (+ redux and TypeScript), with custom admin panel and Google Authroization

---

To run the app on your local machine, clone the repo and run

```
npm install
```

It should install npm-run-all and then all the dependencies inside server dir and client dir as well.
Or just do it manually

```
cd client && npm install
cd ..
cd server && npm install
```

---

The app also needs different env variables.
In server dir create .env file and set its content to:

```
PORT=whateverPortYouWish
MODE=development | production
JWT_SECRET=yourOwnVerySecretKeyNeededForJWTTokens
clientID=google client ID = for auth
mongoDG= connection string to mongodb Atlas - needed for production mode, in development mode*, app uses local mongo db
```

\*remember to have `mongod` running

Also, create another .env file inside client folder

```
REACT_APP_JWT_SECRET=the same secret as in .env in Server dir
REACT_APP_GOOGLE_CLIENT_ID=the same client as in .env in server dir
REACT_APP_MODE=development | production - the only difference here is ommiting the devtools in production mode
```

---

When running `yarn build`, you can use instead `yarn build-prod` to set REACT_APP_MODE to 'production' temporarily so the build omits the dev tools and app works on every browser :)
