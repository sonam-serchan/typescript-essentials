# Getting Started with Typescript

## Prerequisites

- node
- npm

## Installation

Install typescript globally

```code
npm install --location=global typescript
```

Configuration - tsconfig.json

```code
tsc --init
```

`outDir, include, target, noImplicitlyAny, noEmitOnError`

## Run

First compile typescript files using tsc compiler e.g. for file called index.ts you need to do:

```code
tsc index.ts
```

To run each files, use node to run your js files inside the `outDir` folder (where you have configured to output the compiled javascript file)

```code
node dist/index.js
```
