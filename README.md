# Electron with Couchbase and PouchDB Example

An example project for creating a desktop application that synchronizes its data with Couchbase Server and other devices or platforms.  The example uses Couchbase as the remote database, PouchDB as the local database, Electron as the desktop container, Angular 2 for the logic, and Ionic 2 for the UI layer.

## Installation and Configuration

After downloading the project, execute the following to install all the project dependencies:

```
npm install
```

With the dependencies installed, the project can be launched within an Electron container like the following:

```
npm run electron
```

For sync support, Sync Gateway must be running with the configuration found in **sync-gateway-config.json**.

## Resources

Couchbase - [http://www.couchbase.com](http://www.couchbase.com)

Electron - [http://electron.atom.io](http://electron.atom.io)

PouchDB - [https://pouchdb.com](https://pouchdb.com)

The Polyglot Developer - [https://www.thepolyglotdeveloper.com](https://www.thepolyglotdeveloper.com)