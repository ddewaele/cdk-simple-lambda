# Welcome to a simple CDK TypeScript project with lambdaa

This project shows you 4 flavors of lambdas and how to deploy them using the CDK.


## CommonJS Lambda

```
const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');


exports.handler = async (event) => {
};
```

- Uses exports to define the handler.
- CommonJS module system, which is the default for Node.js.
- Typically used in .js files without any specific type in package.json.
- Suitable for older versions of Node.js and for codebases that rely on CommonJS.

## ES Module

```
import {S3Client, ListBucketsCommand} from '@aws-sdk/client-s3';

export const handler = async (event) => {
};
```

- Uses export to define the handler.
- ES Module system, which is the modern JavaScript module system.
- Requires type: "module" in package.json or uses .mjs file extension.
- Provides static imports and exports, which can be more optimized by JavaScript engines.
- Suitable for newer versions of Node.js and for codebases that prefer ES Module syntax.

## Typescript

```
import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
};
```
