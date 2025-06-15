#!/bin/bash

# Exit on error
set -e

echo "🔍 Running security checks..."
npm audit
npm run lint

echo "🏗️ Building the application..."
npm run build

echo "🔒 Running Dark Invader security check..."
dark-invader scan

echo "🚀 Deploying to AWS..."
cd terraform
terraform init
terraform plan
terraform apply -auto-approve

echo "📦 Uploading to S3..."
aws s3 sync ../dist/ s3://$(terraform output -raw bucket_name)

echo "✅ Deployment complete!" 