# AWS Lambda Function

## Objective
This Lambda function generates a short URL and stores the mapping in Amazon DynamoDB.

## Workflow

1. User sends a Long URL using API Gateway.
2. API Gateway invokes AWS Lambda.
3. Lambda generates a unique Short ID.
4. Mapping is stored in DynamoDB.
5. Lambda returns the Short URL.

## AWS Services Used

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- AWS IAM
- Amazon CloudWatch

## Runtime

Python 3.12

## Status

✅ Planned
