# Module 4 Portfolio Project Proposal

## Overview

We will soon introduce the requirements for your _Personal Portfolio Project_.

Much like in Module 2, you will have the freedom to choose the topic for your application.

This time, you'll create a **Full Stack Application** using the PERN stack.


This proposal will serve as a starting point for your ideas and plans.

\*\* **You must submit a proposal and receive approval from an instructor prior to working on your project.**

## Proposal Requirements:

The following requirements must be included in your proposal:

1. **Topic/Idea** -- can be a title w/ a short description

1. **3 User Stories** minimum, describing what a user can expect to see/do when using your application

1. **Wireframes** -- a lo-fidelity visual representation of your front-end using whatever tools you choose. (even pencil and paper)

1. **ERD** for your back-end. Only **one** table is required, but you must add all columns that are expected for each entry to your table(what info does an entry have?)
_For example: a user may have id, name, email, phone_

Your proposal is to be submitted AFTER the Portfolio Project Requirements and Repo have been shared with you in class. 

## Proposal:
I am creating a writing app where people can post their writing. 

**USER STORIES**

1. As a User, I will be greeted by a log-in modal on the landing page that asks for email, password or signup. 

> If user does not have an account they will be redirected to sign up giving their username, email, and password. If they do have an account they will be navigated to the home page. 

2. As a User, I will see several useful articles on display as well as a button that navigates the user to a create page or (write section) where they can create, post, edit and delete articles. 

3. As a User, I will be able to click and read the articles available. 

4. As a User, I can utilize the search bar on the home page to find as well as filter articles by topics.

**Stretch features**

1. As a User, when navigated to the create page, I will be taken to a form that counts words entered as well as suggests synonyms from a dictionary API while writing

1. As a user, I will be able to log in to my account which allows me to edit and delete only my work. 

1. As a user, I can bookmark works that I enjoy. 

1. As a user, I will be navigated to a TOS upon signup that suggests against copy infringement and protects admin from legal. 

1. As a user pronouns will be available on profile. 

1. As a user, I will see a comment, like, and view feature.


Please submit your proposal in a **group message with JD && Carlos** via Slack.



1. Create a directory called `project-snack-a-log`.
1. `cd` into the directory.
1. Fork and clone the [`project-snack-a-log-back-end`](https://github.com/9-1-pursuit/project-snack-a-log-backend) repo into your `project-snack-a-log` directory.
1. Change the name of your `project-snack-a-log-backend` directory to `back-end`.

### Back-end setup

It would be best to open a new terminal tab dedicated to running and developing your back-end.

- `cd back-end`
- `touch .env`

**.env**

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=
```

- `npm install` - install npm packages listed in `package.json`.
- `npm run db:init` - initialize a new database and create tables.
- `npm run db:seed` - seed the table(s) with some data.
- `nodemon` - confirm that this is running on port 3333.

### Back-end Deployment

1. [Render.com Deployment Instructions](https://github.com/9-1-pursuit/guide-deployment/tree/main/render-express-postgres)
1. [Render.com Deployment Video Part 1, Express](https://drive.google.com/file/d/1JefmByjhsh8zoLwzpwdv-Hn9Wg4ezaOB/view?usp=sharing)
1. [Render.com Deployment Video Part 2, PostgreSQL](https://drive.google.com/file/d/1_egu17vjEOjk6Hm94-yPTB2KYDGrISLq/view?usp=sharing)
1. [Snack-A-Log Video-Demo](https://drive.google.com/file/d/1aVnfu7ANdUPbfJhtSb45G2r0JSGtSI2t/view?usp=sharing)
1. [Front-end Instructions](https://github.com/9-1-pursuit/project-snack-a-log-frontend)

