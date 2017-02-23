Show Review Front End

Repos

https://github.com/cpstrillvt93/ShowReviewAPI

https://github.com/cpstrillvt93/ShowReviewFrontEnd

Link to Application

  cpstrillvt93.github.io/ShowReviewFrontEnd/

Wireframes

http://imgur.com/a/pOHYR

User Stories

  User should be able to create an account.

  User should be able to sign-in to their created account.

  User should be able to change his/her password.

  User should be able to sign out without losing stored shows.

  User should be able to add a show to their 'my shows' catalog by filling in the required fields.

  User should be able to edit saved show information at ease.

  User should be able to delete saved shows.


Development Proccess

  I started my development proccess by first creating a simple front-end on which to host my dummy-client. This included basic auth forms, a few forms to enter/edit show information, and the neccesary buttons and associated click-handlers to make these forms functional. I then moved on to the back-end by first establishing what the columns of my primary resource table would be. After settling on those, I decided it would be best to stick to developing a single-to-many relationships(user to shows). After scaffolding my shows table, I spent time tweaking my primary resource controller to establish a relationship with the given user controller(current_user) and making sure that all actions required authorization. After finishing and deploying my back end, I worked on getting my front-end user interface, events, and api working effectively. To alt4er the layout of the page I enlisted the help of handlebars, which now decideldly handles the majority of my visable front-end(specifically my get, clear, delete, and edit shows functions). With 4 CRUD requirements met, I moved on to doing some final touches.


Problems Encountered/Unfinished Business

There were, of course, a variety of problems encountered over the development proccess, however most of them were overcome through slow, methodical practices. That said, a variety of initial user stories were not achieved.

a) I would like to create a way to sort created shows.

b) I would like to establish a bands table, where the user can review live shows and albums of a band.
