
This is a Proof of Concept to test the cookie banner bundle.

### How to run

Due to CORS please run this example using a development server.

```shell
npx web-dev-server --node-resolve --open --watch
```

### How it works

The cookie banner has been bundled together with all necessary components to work, including Lit dependencies.
This bundle can be found in the root directory of this project: `pie-cookie-banner_lit.js`. If we prove it works,
it will be added to a CDN for dynamic access.

All the configuration is being done in the header, it needs:

1. Styles set up - this is for global styles, fonts and css variables that are not bundled in any of our components by default
2. Cookie banner import - this will load the bundle
3. Cookie banner setup - a script where you can handle any customisations including localisation. As well as listening to events to configure cookies.
