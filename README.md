Minimal gulp starter
==============

This is my minimal gulp starter. It's basically just gulp and browser-sync.

I like to start building things with vanilla web, but gulp/browser-sync are too
convenient to pass up when starting off.


Requirements
--------------
This depends on node and npm. If you don't have those, you'll need them.

**TODO: add instructions on how to install node**

You will also need gulp installed globally:

```
npm install -g gulp
```


Installation
--------------

```
git clone https://github.com/rjmill/minimal-gulp-starter
cd minimal-gulp-starter
npm install
```


Usage
--------------
To fire up browser-sync, and have it start listening for changes in `app/`:

```
gulp serve
```

This should open the project (served from `localhost:3000`) in your default web
browser.

Now whenever you change `*.html` files in `app/`, `*.js` files in `app/js`, or
`*.css` files in `app/css`, the changes will be detected and your browser will
reload.
