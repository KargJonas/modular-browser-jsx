> WARNING: This should not be used in production. Compile your project before deployment with modular-jsx for a significant performance increase.

# Modular-Browser-JSX
## A little tool that enables you to use [Modular](http://github.com/KargJonas/modular) with JSX directly in the browser.

## - Installation
```html
<script src="path/to/modular-jsx.min.js"></script>
```

### jsDelivr link:
https://cdn.jsdelivr.net/gh/KargJonas/modular-browser-jsx/modular-jsx.min.js

## - Usage
Any script, that utilizes Modular with JSX has to have a `type="modular/jsx"` attribute:
```html
<!-- Including the library -->
<script src="path/to/modular-jsx.min.js"></script>

<!-- Your Modular project -->
<script src="my/very/awesome/modular-app.js" type="modular/jsx"></script>
<!-- OR -->
<script type="modular/jsx">
  ...
</script>
```

#### Have fun!