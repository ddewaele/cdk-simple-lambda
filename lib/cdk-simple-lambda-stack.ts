import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';


export class CdkSimpleLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const simpleLambda = new lambda.Function(this, 'SimpleLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler', // Assumes your Lambda code is in index.js
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../lambda/simple-lambda')), // Path to your Lambda function code
      environment: {
      },
    });

    const simpleLambdaCommonJs = new lambda.Function(this, 'SimpleLambdaCommonJs', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler', // Assumes your Lambda code is in index.js
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../lambda/simple-lambda-commonjs')), // Path to your Lambda function code
      environment: {
      },
    });

    const simpleLambdaES = new lambda.Function(this, 'SimpleLambdaES', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler', // Assumes your Lambda code is in index.js
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../lambda/simple-lambda-es')), // Path to your Lambda function code
      environment: {
      },
    });

    simpleLambdaCommonJs.addToRolePolicy(new iam.PolicyStatement({
      actions: ['s3:ListAllMyBuckets'],
      resources: ['*'],
    }));

    simpleLambdaES.addToRolePolicy(new iam.PolicyStatement({
      actions: ['s3:ListAllMyBuckets'],
      resources: ['*'],
    }));


    const inlineLambda = new lambda.Function(this, 'SimpleLambdaInline', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          console.log("Hello World");
          return {
            statusCode: 200,
            body: JSON.stringify({ message: "Hello World" }),
          };
        };
      `),
    });



  }
}
