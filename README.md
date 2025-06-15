# TEFL Website

A secure, modern website built with React, AWS, and Terraform.

## Security Features

- Regular npm security audits
- ESLint for code quality and security
- Dark Invader monitoring for security threats
- AWS CloudFront with HTTPS
- Secure S3 bucket configuration
- Regular security scans and monitoring

## Prerequisites

- Node.js 18+
- AWS CLI configured with appropriate credentials
- Terraform CLI
- Dark Invader API key

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Initialize Terraform:
   ```bash
   cd terraform
   terraform init
   ```

3. Configure AWS credentials:
   ```bash
   aws configure
   ```

4. Configure Dark Invader:
   ```bash
   export DARK_INVADER_API_KEY=your_api_key
   ```

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Run security checks:
   ```bash
   npm audit
   npm run lint
   ```

## Deployment

1. Build the React application:
   ```bash
   npm run build
   ```

2. Deploy infrastructure:
   ```bash
   cd terraform
   terraform plan
   terraform apply
   ```

3. Deploy the website:
   ```bash
   aws s3 sync dist/ s3://your-bucket-name
   ```

## Security Monitoring

- Regular npm security audits
- ESLint for code quality and security
- Dark Invader monitors for security threats in real-time
- Security alerts are sent to the configured Slack channel

## Contributing

1. Create a new branch
2. Make your changes
3. Run security checks
4. Submit a pull request

## License

MIT
