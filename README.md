# cypress-e2e-tests-template
Cypress based end-to-end testing framework

## Getting Started
System requirements:
https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

Install all dependencies:

```bash
  cd cypress-e2e-tests-template
  # then
  npm install
  # or
  yarn install
```

To be able to run an e2e test suite in DEV/QA/Staging environment with html REPORT:

```bash
#to run qa
npm run test:qa
#to run dev
npm run test:dev
#to run staging
npm run test:staging
```

To be able to run an Accessibility test suite in DEV/QA/Staging environment with html REPORT:
```bash
#to run qa
npm run cy:accessibility:qa
#to run dev
npm run test:accessibility:dev
#to run staging
npm run test:accessibility:staging
```

To run tests for debugging open Cypress, you need to specify an environment you would like to run your tests
In this case you should replace {ENV} with the name of your config file. If your config file is
qa.json, you need to put qa instead of {ENV}
example: `npx cypress open --env configFile=qa`
```bash
npx cypress open --env configFile={ENV}
# or
yarn run cypress open --env configFile={ENV}
```
