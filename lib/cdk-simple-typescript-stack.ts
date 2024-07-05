import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { execSync } from 'child_process';


export class CdkSimpleTypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Build and prune the Lambda code (for convenience here. Typically this would be done using a separate build pipeline)
    const buildTypeScriptCode = (lambdaPath: string) => {
      console.log(`Building Lambda function at ${lambdaPath}`);
      execSync('npm install && npm run build', { cwd: lambdaPath, stdio: 'inherit' });
      execSync('npm prune --production', { cwd: lambdaPath, stdio: 'inherit' });
    };

    const lambdaPath = path.resolve(__dirname, '../lambda/lambda-typescript')

    // Build and prune Lambda code
    buildTypeScriptCode(lambdaPath);

    // Define the Lambda function
    const typeScriptLambdaFunction = new lambda.Function(this, 'TypeScriptLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'dist/index.handler', // Assumes your typescript code is in index.js (and transpited to dist/index.js)
      code: lambda.Code.fromAsset(lambdaPath), // Path to your Lambda function code
      environment: {
      },
    });



  }
}
