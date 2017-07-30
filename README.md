Minimal gulp starter
==============

This is my minimal gulp starter. It's basically just gulp and browser-sync.

I like to start building things with vanilla web, but gulp/browser-sync are too
convenient to pass up when starting a new project.


Requirements
--------------
This depends on node and npm. If you don't have those, you'll need them.

**TODO: add instructions on how to install node**


Installation
--------------

```
git clone https://github.com/rjmill/minimal-gulp-starter
cd minimal-gulp-starter
npm install
```


Usage
--------------
To fire up browser-sync, and have it start listening for changes in `static/`:

```
npm start
```

This should open the project (served from `localhost:3000`) in your default web
browser.

Whenever you make changes to any files in `static/`, browser-sync will detect them
and automagically reload the page without you having to hit refresh.
