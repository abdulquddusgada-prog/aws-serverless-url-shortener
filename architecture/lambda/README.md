# Architecture

## Serverless URL Shortener Architecture

The project uses a serverless AWS architecture consisting of Amazon API Gateway, AWS Lambda, and Amazon DynamoDB.

![Architecture Diagram](architecture-diagram.png)

## Request Flow

1. User enters a long URL in the frontend.
2. Frontend sends a POST request to API Gateway.
3. API Gateway invokes the Lambda function.
4. Lambda generates a unique short ID.
5. The URL mapping is stored in DynamoDB.
6. Lambda returns the generated short ID.
7. When the short URL is opened, API Gateway invokes Lambda through the GET route.
8. Lambda retrieves the original URL and returns a 302 redirect.

## AWS Services

- Amazon API Gateway
- AWS Lambda
- Amazon DynamoDB
- AWS IAM
- Amazon CloudWatch
