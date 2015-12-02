# hottowelRatpack

**Generated from HotTowel Angular**

>*Opinionated Angular style guide for teams by [@john_papa](//twitter.com/john_papa)*

>More details about the styles and patterns used in this app can be found in my
[Angular Style Guide](https://github.com/johnpapa/angularjs-styleguide) and my [Angular Patterns:
Clean Code](http://jpapa.me/ngclean) course at [Pluralsight](http://pluralsight.com/training/Authors/Details/john-papa)
and working in teams.

The significant difference is, we've replaced gulp with gradle, and express with ratpack. That's what people who love the JVM do.

## Prerequisites

1. Install Java 8

## Running HotTowel

### Linting (TODO)
 - Run code analysis using `gulp vet`. This runs jshint, jscs, and plato.

### Tests (TODO)
 - Run the unit tests using `./gradlew karmaRun` (via karma, mocha, sinon).

### Running in dev mode
 - Run the project with `./gradlew -t run`
 - Opens it in a browser and updates the browser with any files changes.

### Building the project
 - Build the optimized project using `./gradlew shadowJar`
 - This bundles up the code into a shadowJar that can be deployed anywhere.

### Running the optimized code
 - Run the optimize project from the build folder with `java -jar build/libs/hottowel-ratpack-all.jar`

## Exploring HotTowel
HotTowel Angular starter project

### Structure

    /src
      /assets
        /js
          /app
          /test-helpers
          # application.js
          # lib.js
        /html
        /images
        /styles

### Installing Packages
When you first run this project, it will download all dependencies, however if there is a change to the dependencies
and you want to force download, run `./gradlew clean assetClean bowerClean` to clean dependencies.

### The Modules
The app has 4 feature modules and depends on a series of external modules and custom but cross-app modules

```
app --> [
        app.admin --> [
            app.core,
            app.widgets
        ],
        app.dashboard --> [
            app.core,
            app.widgets
        ],
        app.layout --> [
            app.core
        ],
        app.widgets,
        app.core --> [
            ngAnimate,
            ngSanitize,
            ui.router,
            blocks.exception,
            blocks.logger,
            blocks.router
        ]
]
```

#### core Module
Core modules are ones that are shared throughout the entire application and may be customized for the specific
application. Example might be common data services.

This is an aggregator of modules that the application will need. The `core` module takes the blocks, common, and
Angular sub-modules as dependencies.

#### blocks Modules
Block modules are reusable blocks of code that can be used across projects simply by including them as dependencies.

##### blocks.logger Module
The `blocks.logger` module handles logging across the Angular app.

##### blocks.exception Module
The `blocks.exception` module handles exceptions across the Angular app.

It depends on the `blocks.logger` module, because the implementation logs the exceptions.

##### blocks.router Module
The `blocks.router` module contains a routing helper module that assists in adding routes to the $routeProvider.

## Gradle Tasks

### Task Listing

- `./gradlew tasks --all`

    Displays all of the available gradle tasks.

### Code Analysis (TODO)

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.

- `gulp plato`

    Performs code analysis using plato on all javascript files. Plato generates a report in the reports folder.

### Testing

- `./gradlew karmaRun`

    Runs tests and prints result to command line

- `./gradlew karmaWatch`

    Runs tests using karma in _watch_ mode

### Cleaning Up

- `./gradlew clean`

    Remove all files from the build and temp folders

- `./gradlew bowerClean`

    Remove all bower assets

- `./gradlew assetClean`

    Remove all compiled assets

## License

MIT
