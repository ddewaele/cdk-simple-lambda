import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';


export class CdkSimpleLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const lambdaFunction = new lambda.Function(this, 'SimpleLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler', // Assumes your Lambda code is in index.js
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../lambda/simple-lambda')), // Path to your Lambda function code
      environment: {
      },
    });

  }
}
