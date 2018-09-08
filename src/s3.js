import AWS from 'aws-sdk';

AWS.config.update({
    region: "us-east-2",
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "us-east-2:a0f2b37b-f5ed-4700-b740-1b3299d7feb1"
    })
});

var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: "lesson-ninja-files" }
});

export default s3