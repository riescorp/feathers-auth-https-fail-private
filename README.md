# feathers-auth-https-fail-private

I cannot use Google, Github and Facebook authentication services when using https. Without https it will work fine (except for facebook that requires https) but when enabling https something changes and I get 505 errors:

```
error: Unknown authentication strategy 'google'
error: Unknown authentication strategy 'github'
error: Unknown authentication strategy 'facebook'
```

Try changing `/src/index.js` => either `const USE_HTTPS = true;` or `const USE_HTTPS = false;` and use your own cert and key files

## Steps to create this project

### Generate app

`feathers generate app`


### Generate authentication

```bash
MYPROMPT$ feathers generate authentication
? What authentication providers do you want to use? Other PassportJS strategies
not in this list can still be configured manually. Username + Password (Local),
Auth0, Google, Facebook, GitHub
? What is the name of the user (entity) service? users
No locked version found for passport-auth0, installing latest.
No locked version found for passport-google-oauth20, installing latest.
No locked version found for passport-facebook, installing latest.
No locked version found for passport-github, installing latest.
? What kind of service is it? MongoDB
? What is the database connection string? mongodb://localhost:27017/feathers_aut
h_https_fail_private
    force config/default.json
   create src/services/users/users.service.js
   create src/authentication.js
    force src/app.js
    force src/services/index.js
   create src/services/users/users.hooks.js
   create test/services/users.test.js
   create src/mongodb.js
npm WARN feathers-auth-https-fail-private@0.0.0 No repository field.
npm WARN feathers-auth-https-fail-private@0.0.0 No license field.

+ @feathersjs/authentication-local@1.2.4
+ @feathersjs/authentication-jwt@2.0.4
+ @feathersjs/authentication@2.1.10
+ passport-auth0@1.0.0
+ @feathersjs/authentication-oauth2@1.2.3
+ @feathersjs/authentication-oauth2@1.2.3
+ @feathersjs/authentication-oauth2@1.2.3
+ @feathersjs/authentication-oauth2@1.2.3
+ passport-google-oauth20@1.0.0
+ passport-facebook@2.1.1
+ passport-github@1.1.0
added 50 packages from 34 contributors and audited 3201 packages in 4.567s
found 0 vulnerabilities

MYPROMPT$
```



