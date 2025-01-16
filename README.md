# Serverless Greeting App

Welcome to the **Serverless Greeting App**! This project is a fully serverless application hosted on AWS, utilizing services such as S3, DynamoDB, CloudFront, Route 53, ACM, and Lambda. The app is accessible via a custom domain: [greetings.bhagwatibashyal.site](https://greetings.bhagwatibashyal.site).

## Features

- **Greeting Display:** A web-based interface to display personalized greetings.
- **Custom Domain:** Hosted on a custom domain using Route 53.
- **Dynamic Views Update:** View counts are tracked and updated in DynamoDB via Lambda functions.
- **Serverless Architecture:** Fully serverless design using AWS services for scalability and cost-efficiency.

## Architecture

1. **S3:** Serves as the static file host for the web application.
2. **CloudFront:** Distributes content globally with low latency and high transfer speeds.
3. **Route 53:** Manages the custom domain name.
4. **ACM (AWS Certificate Manager):** Provides SSL/TLS certificates for secure HTTPS connections.
5. **DynamoDB:** Stores greeting views and their counts.
6. **Lambda:** Updates the view counts in DynamoDB whenever the page is accessed.

## Note:

1. Request an SSL/TLS certificate for your domain via ACM:
   - Navigate to AWS Certificate Manager.
   - Request a public certificate for your domain (e.g., `greetings.bhagwatibashyal.site`).
   - Validate the certificate using DNS validation in Route 53.

2. Configure your custom domain name in Route 53 and associate it with the CloudFront distribution.

3. Access the app at: [https://greetings.bhagwatibashyal.site](https://greetings.bhagwatibashyal.site).

## AWS Service Configurations

### S3
- Static website hosting enabled.
- Contains all frontend files (HTML, CSS, JS).

### CloudFront
- Configured to serve content from the S3 bucket.
- SSL/TLS enabled for secure connections using ACM.

### ACM (AWS Certificate Manager)
- Issues and manages SSL/TLS certificates for the custom domain.
- Certificates are automatically renewed.

### DynamoDB
- Table schema:
  - **Table Name:** `serverless_app`
  - **Partition Key:** `id` (String)
  - **Attributes:** `views` (Number)

### Lambda
- Updates the `views` count in DynamoDB.
- Triggered by HTTP requests through function URL.

### Route 53
- Configured to route traffic to CloudFront using the domain name `greetings.bhagwatibashyal.site`.

## Usage

1. Visit the app at [greetings.bhagwatibashyal.site](https://greetings.bhagwatibashyal.site).
2. The greeting page loads, and the view count is updated dynamically.

## Future Enhancements
- Add user authentication for personalized greetings.
- Enable multilingual greetings.
- Add analytics to track user interactions.
