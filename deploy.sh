#!/bin/bash
# Production Deployment Script for Hostinger

echo "🚀 Starting Golds Bet Website Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Create deployment package
echo "📁 Creating deployment package..."
mkdir -p deployment
cp -r .next deployment/
cp -r public deployment/
cp package.json deployment/
cp next.config.ts deployment/
cp -r node_modules deployment/ 2>/dev/null || echo "⚠️  node_modules not found locally"

# Create deployment instructions
cat > deployment/DEPLOYMENT_INSTRUCTIONS.txt << EOF
🚀 HOSTINGER DEPLOYMENT INSTRUCTIONS

1. LOGIN TO HOSTINGER:
   - Go to hPanel
   - Navigate to File Manager
   - Go to public_html folder

2. UPLOAD FILES:
   - Delete all existing files in public_html
   - Upload all files from this deployment folder
   - Make sure .next folder is uploaded completely

3. INSTALL DEPENDENCIES:
   - Go to Terminal in hPanel
   - Run: cd public_html
   - Run: npm install
   - Run: npm run build (if needed)

4. START THE APPLICATION:
   - Run: npm start
   - Or use PM2: pm2 start npm --name "goldsbet" -- start

5. CONFIGURE NODE.JS:
   - Go to Advanced → Node.js in hPanel
   - Enable Node.js
   - Set version to 18.x or 20.x
   - Set Application Root to /public_html

6. CLOUDFLARE SETUP:
   - Add your domain to Cloudflare
   - Update nameservers in Namecheap
   - Configure DNS records
   - Enable SSL/TLS

7. TEST YOUR WEBSITE:
   - Visit your domain
   - Check all pages load correctly
   - Test mobile responsiveness

For detailed instructions, see DEPLOYMENT_GUIDE.md
EOF

echo "📋 Deployment package created in 'deployment' folder"
echo "📖 Instructions saved to deployment/DEPLOYMENT_INSTRUCTIONS.txt"

# Display next steps
echo ""
echo "🎯 NEXT STEPS:"
echo "1. Upload the 'deployment' folder contents to Hostinger public_html"
echo "2. Follow the instructions in DEPLOYMENT_INSTRUCTIONS.txt"
echo "3. Set up Cloudflare as described in DEPLOYMENT_GUIDE.md"
echo ""
echo "📚 For detailed instructions, see:"
echo "   - DEPLOYMENT_GUIDE.md (Complete setup guide)"
echo "   - PRODUCTION_CONFIG.md (Configuration details)"
echo ""
echo "✅ Deployment package ready!"
