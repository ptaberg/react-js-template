<h1 align="center">React.js frontend template<br/>for <a href="https://github.com/create-go-app">Create Go App CLI</a></h1>

<img align="right" width="256px" src="https://user-images.githubusercontent.com/11155743/72461572-5d8dd680-37e0-11ea-8d78-e98fd3443bba.png" alt="Preact.js logo" />

React is a JavaScript library for building user interfaces.

- **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
- **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
- **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

📚 [Documentation](https://reactjs.org/docs/getting-started.html)

## Requirements

- Create Go App CLI `v0.5.x` ([create-go-app/cli](https://github.com/create-go-app/cli))
- Node.js `v12+`, NPM `v6.x` ([nodejs/download](https://nodejs.org/en/download/))

### Optional

- Docker `v19.x` ([docker/onboarding](https://hub.docker.com/?overlay=onboarding))

## Code lint & test

- [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) `v4.2.4`

## Template structure

```console
foo@bar:frontend$ tree .
.
├── Dockerfile
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js

2 directories, 19 files
```

## TODO (ASAP list)

- Add UI components
- Add tests
- ...
- You're feel free to send ideas to [issue](https://github.com/create-go-app/preact-js-template/issues/new/choose) 😉

## Developers

- Idea and active development by [Vic Shóstak](https://github.com/koddr) (aka Koddr).

## Project assistance

If you want to say «thank you» or/and support active development `Create Go App`:

1. Add a GitHub Star to project.
2. Twit about project [on your Twitter](https://twitter.com/intent/tweet?text=Set%20up%20a%20new%20Go%20%28Golang%29%20full%20stack%20app%20by%20running%20one%20CLI%20command%21%26url%3Dhttps%3A%2F%2Fgithub.com%2Fcreate-go-app).
3. Donate some money to project author via PayPal: [@paypal.me/koddr](https://paypal.me/koddr?locale.x=en_EN).
4. Join DigitalOcean at our [referral link](https://m.do.co/c/b41859fa9b6e) (your profit is **$100** and we get $25).
5. Become a sponsor.

Thanks for your support! 😘 Together, we make this project better every day.

### Sponsors

| Logo                                                                                                                                                              | Sponsor description                                                                                                                 | URL                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| <img align="center" width="100px" src="https://raw.githubusercontent.com/create-go-app/cli/master/images/sponsors/1wa.co_logo.png" alt="True web artisans logo"/> | **True web artisans** — IT specialists around the world, who are ready to share their experience to solve your business objectives. | [https://1wa.co](https://1wa.co) |
|                                                                                                                                                                   | <div align="center">💡 <a href="mailto:truewebartisans@gmail.com">Want to become a sponsor too?</a></div>                           |                                  |

## License

MIT
