const { Bucket } = require('@aws-cdk/aws-s3');
const { Stack, App } = require('@aws-cdk/core');
 
function createS3Bucket(stack) {
  // Create an S3 bucket
  new Bucket(stack, 'MyS3Bucket', {
    versioned: true,
    removalPolicy: RemovalPolicy.DESTROY, // optional: specify removal policy
  });
}
 
// Define an app
const app = new App();
 
// Instantiate the stack
const myStack = new Stack(app, 'MyS3Stack');
 
// Create S3 bucket
createS3Bucket(myStack);
 
// Synthesize the stack
app.synth();