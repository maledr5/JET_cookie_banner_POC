This is a Proof of Concept to test the cookie banner bundle.

### How to run

You can either run a development server or just open any of the html files in your browser: `index.htm`, `example2.html`
and `example3.html`.

```shell
npx web-dev-server --node-resolve --open --watch
```

### Cookie Banner CDN

The cookie banner has been bundled together with all necessary components to work, including Lit dependencies.
This bundle is now available in a CDN to be used ONLY by projects that can not install npm packages.
More instructions and an additional example can be found in the component's
[readme](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-cookie-banner#cdn-usage), and
the full documentation of the cookie banner is [here](https://pie.design/patterns/cookie-banner/code/)

### How this examples work

All the configuration is being done in the header, it needs:

1. Styles set up - this is for global styles, fonts and css variables that are not bundled in any of our components by
   default
2. Cookie banner import - this will load the bundle
3. Cookie banner setup - a script where you can handle any customisations including localisation. As well as listening
   to events to configure cookies.

This is just a reference example, please make any necessarily changes that will fit your own project.
