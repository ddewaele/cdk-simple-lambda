#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkSimpleLambdaStack } from '../lib/cdk-simple-lambda-stack';
import { CdkSimpleLambdaWithDependenciesStack } from '../lib/cdk-simple-lambda-with-dependencies';
import { CdkSimpleTypescriptStack } from '../lib/cdk-simple-typescript-stack';

const app = new cdk.App();
new CdkSimpleLambdaStack(app, 'CdkSimpleLambdaStack', {});
new CdkSimpleLambdaWithDependenciesStack(app, 'CdkSimpleLambdaWithDependenciesStack', {});
new CdkSimpleTypescriptStack(app, 'CdkSimpleTypescriptStack', {});