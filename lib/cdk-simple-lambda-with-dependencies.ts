import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { execSync } from 'child_process';


export class CdkSimpleLambdaWithDependenciesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Build and prune the Lambda code (for convenience here. Typically this would be done using a separate build pipeline)
    const buildLambdaCode = (lambdaPath: string) => {
      console.log(`Building Lambda function at ${lambdaPath}`);
      execSync('npm install', { cwd: lambdaPath, stdio: 'inherit' });
      execSync('npm prune --production', { cwd: lambdaPath, stdio: 'inherit' });
    };

    const lambdaPath = path.resolve(__dirname, '../lambda/lambda-with-dependencies')

    // Build and prune Lambda code
    buildLambdaCode(lambdaPath);

    // Define the Lambda function
    const lambdaFunction = new lambda.Function(this, 'SimpleLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler', // Assumes your Lambda code is in index.js
      code: lambda.Code.fromAsset(lambdaPath), // Path to your Lambda function code
      environment: {
      },
    });

  }
}
