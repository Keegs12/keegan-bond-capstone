![Alt text](./src/assets/logo/logo-no-background.png)

# EsportsHub

EsportsHub is a news outlet/blog posting application centered around popular esports titles such as LoL, Valorant, CS:GO, etc. The goal of the project is to create a universal "Hub" that houses all the data necessary for your favorite game.

EsportsHub focus's heavily on the article content being user generated. Instead of pulling data from an API, EsportsHub invites each user to create an article relating to whatever topic your interested in. For example: A big player trade, team drama, tournament details etc.

On top of being a news outlet, each team competing competively in their respective game can be found here, along with each player and some information about them.

## Acknowledgements and Inspirations

-   [Esports.gg](https://esports.gg/)
-   [Esports.net](https://www.esports.net/)
-   [Esportsinsider](https://esportsinsider.com/)

## Tech Stack

**Client:** React, JS, HTML, CSS/SASS

**Server:** Node, Express, MySQL, Knex

## Features

-   News Page for each game || clicking on an article will direct you to that specific article page.
-   Ability to create an article and share your thoughts
-   Teams Page for each game || clicking on a team will take you to the players
-   Players Page for each game
-   User authentication || ability to sign up and login

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Create a .env file

```bash
  REACT_APP_API_URL = http://servername:port || example http://localhost:8080
```

Start the server

```bash
  npm start
```

After you have set up the Front End you will have to then download and install the server for the project. This can be found at https://github.com/Keegs12/keegan-bond-capstone-BE

## API Reference

#### Get League of Legends articles

```http
  GET /api/lol/articles
```

#### Get specific article

```http
  GET /api/lol/articles/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of article to fetch |

#### Create an article

```http
  POST /api/lol/articles
```

#### Get teams for League of Legends

```http
  GET /api/lol/teams
```

#### Get specific team for League of Legends

```http
  GET /api/lol/teams/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of team to fetch |

#### Create a user

```http
  POST /api/users/register
```

#### Login

```http
  POST /api/users/login
```

#### Get Current User

```http
  GET /api/users/current
```

## Roadmap

With this being a new outlet/blog posting application there are many different avenues that I can take to improve and add to the site.

A few of my next steps below:

-   Region selecter for teams. Example: NA, KR, EU.

-   Allow users to add more information to their article via twitter posts, reddit posts or other media platforms.

-   Increase connectivity amongst components. Allow users to "tag" articles and have these articles display based on that respective tag. If someone creates a tag for a player have that article display when the user views that player.

-   Integrate the ability to reuse each component for whatever game the user selects. Essentially just pull different data based on user selection

## Lessons Learned

This project had numerous challenges but the most notable are:

Allowing the user to upload an image

-   Being able to accept the image in a proper format, then read it and write it as a png and then store it in the database as an acceptable src for an image tag was quite the challenge.

User Authentication

-   I had originally not planned on having user authentication, but it realistically makes a lot of sense when dealing with user generated data. Learning how to properly use jwt's, passing this user data to multiple components, and ensuring logging in and out was another difficult task.

Styling

-   As simple and "easy" as styling seems it can get quite complex and very aggravating. I had quite the vision for what my site was going to look like but getting it to a respectable state was time consuming and challenging.
