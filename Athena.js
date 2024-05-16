const { CfnWorkGroup } = require('@aws-cdk/aws-athena');
const { Stack, App } = require('@aws-cdk/core');
 
function createAthenaWorkgroup(stack) {
  // Create an Athena workgroup
  new CfnWorkGroup(stack, 'MyAthenaWorkgroup', {
    name: 'MyAthenaWorkgroup',
    description: 'My Athena Workgroup',
    state: 'ENABLED',
    configuration: {
      enforceWorkGroupConfiguration: true,
      publishCloudWatchMetricsEnabled: true,
      resultConfiguration: {
        outputLocation: `s3://${process.env.BUCKET_NAME}/query-results/`, // Change this to your S3 bucket
        encryptionConfiguration: {
          encryptionOption: 'SSE_S3',
        },
      },
    },
  });
}
 
// Define an app
const app = new App();
 
// Instantiate the stack
const myStack = new Stack(app, 'MyAthenaStack');
 
// Create Athena workgroup
createAthenaWorkgroup(myStack);
 
// Synthesize the stack
app.synth();