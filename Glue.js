const { CfnJob } = require('@aws-cdk/aws-glue');
const { Stack, App } = require('@aws-cdk/core');

hiiii
 
function createGlueJob(stack) {
  // Create a Glue job
  new CfnJob(stack, 'MyGlueJob', {
    command: {
      name: 'glueetl',
scriptLocation: 's3://path/to/glue/script.py', // Change this to your Glue script location
    },
    role: 'arn:aws:iam::123456789012:role/service-role/MyGlueServiceRole', // Change this to your IAM role ARN
    glueVersion: '2.0',
  });
}
 
// Define an app
const app = new App();
 
// Instantiate the stack
const myStack = new Stack(app, 'MyGlueStack');
 
// Create Glue job
createGlueJob(myStack);
 
// Synthesize the stack
app.synth();