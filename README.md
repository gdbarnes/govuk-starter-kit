## govuk starter kit

Generates the necessary HTML, CSS, JavaScript and imagery to be used when starting ESFA web projects.

### Clone the repository

```sh
https://github.com/gdbarnes/govuk-starter-kit.git
```

### In your terminal

```sh
yarn
```

```sh
yarn start
```

Once running the application you'll be able to see the status of your local npm govuk packages. Assuming they are up to date, use the buttons to `Generate assets` > `Create archive file` > `Download assets.zip`. The progress of these actions can be seen in your terminal.

The contents of `assets.zip` should be placed in the web root of your new project. The markup shown in the app can then be used as a base layout.

Once a cdn is available this app can be modified to supply assets.

> Note, that this app converts all SASS files to CSS.
