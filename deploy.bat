@echo off
REM Production Deployment Script for Hostinger (Windows)

echo 🚀 Starting Golds Bet Website Deployment...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the project root.
    pause
    exit /b 1
)

REM Build the project
echo 📦 Building the project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please fix the errors and try again.
    pause
    exit /b 1
)

echo ✅ Build completed successfully!

REM Create deployment package
echo 📁 Creating deployment package...
if exist "deployment" rmdir /s /q "deployment"
mkdir "deployment"
xcopy ".next" "deployment\.next" /E /I /Y
xcopy "public" "deployment\public" /E /I /Y
copy "package.json" "deployment\"
copy "next.config.ts" "deployment\"
if exist "node_modules" (
    xcopy "node_modules" "deployment\node_modules" /E /I /Y
) else (
    echo ⚠️  node_modules not found locally
)

REM Create deployment instructions
(
echo 🚀 HOSTINGER DEPLOYMENT INSTRUCTIONS
echo.
echo 1. LOGIN TO HOSTINGER:
echo    - Go to hPanel
echo    - Navigate to File Manager
echo    - Go to public_html folder
echo.
echo 2. UPLOAD FILES:
echo    - Delete all existing files in public_html
echo    - Upload all files from this deployment folder
echo    - Make sure .next folder is uploaded completely
echo.
echo 3. INSTALL DEPENDENCIES:
echo    - Go to Terminal in hPanel
echo    - Run: cd public_html
echo    - Run: npm install
echo    - Run: npm run build ^(if needed^)
echo.
echo 4. START THE APPLICATION:
echo    - Run: npm start
echo    - Or use PM2: pm2 start npm --name "goldsbet" -- start
echo.
echo 5. CONFIGURE NODE.JS:
echo    - Go to Advanced → Node.js in hPanel
echo    - Enable Node.js
echo    - Set version to 18.x or 20.x
echo    - Set Application Root to /public_html
echo.
echo 6. CLOUDFLARE SETUP:
echo    - Add your domain to Cloudflare
echo    - Update nameservers in Namecheap
echo    - Configure DNS records
echo    - Enable SSL/TLS
echo.
echo 7. TEST YOUR WEBSITE:
echo    - Visit your domain
echo    - Check all pages load correctly
echo    - Test mobile responsiveness
echo.
echo For detailed instructions, see DEPLOYMENT_GUIDE.md
) > "deployment\DEPLOYMENT_INSTRUCTIONS.txt"

echo 📋 Deployment package created in 'deployment' folder
echo 📖 Instructions saved to deployment\DEPLOYMENT_INSTRUCTIONS.txt

REM Display next steps
echo.
echo 🎯 NEXT STEPS:
echo 1. Upload the 'deployment' folder contents to Hostinger public_html
echo 2. Follow the instructions in DEPLOYMENT_INSTRUCTIONS.txt
echo 3. Set up Cloudflare as described in DEPLOYMENT_GUIDE.md
echo.
echo 📚 For detailed instructions, see:
echo    - DEPLOYMENT_GUIDE.md ^(Complete setup guide^)
echo    - PRODUCTION_CONFIG.md ^(Configuration details^)
echo.
echo ✅ Deployment package ready!
pause
