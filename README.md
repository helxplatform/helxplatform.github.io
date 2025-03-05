# HeLx Marketing Site

## Description

This is a Gatsby-powered marketing site that stores content in MDX files. The content is organized in the src/content directory, where each section is housed inside a folder named after the page title it belongs to. The site is deployed on GitHub Pages using GitHub Actions.

## Installation

- To run this website locally, clone the repo and install the dependencies (`npm i --legacy-peer-deps`)

## 🚧 Development

- Spin up the development server on [http://localhost:8000](http://localhost:8000) by running `npm run develop`.
- When proposing changes, always verify the build process runs without error locally with `npm run build`. Serve the built application on port `localhost:9000` with `npm run serve`.

## 📁 Content Management

> [!NOTE]  
> All content lives in the `src/content` directory in MDX files.

```plaintext
.
└── src
    ├── content
        ├── about
            ├── example.mdx
        ├── home
            ├── example.mdx
        ├── ...
        └── ...
```

- Since content is managed using MDX, we can combine markdown syntax with React components.
- For descriptions of how each component is used in the MDX files, see comments found coupled with the code (component declarations) in `src/components`

You are able to access the content via an interactive GraphQL playground at [http://localhost:8000/\_\_graphql](http://localhost:8000/__graphql) in your browser.

## 🎁 Deployment

- Staging branch deployments are automatic via AWS Amplify and can be accessed at [this link](https://staging.d3ai4fqdwaarvq.amplifyapp.com/) upon code changes.

- After verifying on staging, up-to-date changes can be found on production at [helx.renci.org](https://helxplatform.github.io/).
