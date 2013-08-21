## titanium-backbone

Titanium-backbone is a framework for building native iOS and Android
apps using Titanium and Backbone.

### Current status

This project is in very early stages of extraction from a production
[mobile banking
application](http://itunes.apple.com/us/app/sf-fire-credit-union-mobile/id492113880?mt=8),
but the ideas and patterns extracted have worked very well within this
large app. We're taking the time to refactor as we extract so it should
be even cleaner.

We have a Google Group at http://groups.google.com/group/titanium-backbone if you'd like to participate.

### Installation

#### Install Titanium SDK

Visit the [Titanium download page](http://www.appcelerator.com/products/download/) and follow the instructions from there to download Titanium Studio (and the Titanium SDK), or clone the GitHub repository at [https://github.com/appcelerator/titanium_mobile](https://github.com/appcelerator/titanium_mobile).

#### Clone the project to your development machine:

```console
$ git clone https://github.com/trabian/titanium-backbone.git
$ cd titanium-backbone
```

#### Install package dependencies

```console
$ npm install
```

#### Run the app generator to create a new mobile app

```console
$ ./bin/tb new [app name]
# Run ./bin/tb new --help for instructions
```

_Optional:_ Install and run the app generator globally by running:

```console
$ npm install -g
$ tb new --help
```

### Running the tests

The test suite can be run using npm:

```console
$ npm test
```

#### testem

During development it can be helpful to use [testem](https://github.com/airportyh/testem) for monitoring the source files and rerunning the tests as the underlying files are changed.

To use testem, run the following in the titanium-backbone directory:

```console
$ npm install -g testem
$ testem
```
