# Production Environment Configuration

## Environment Variables (.env.local)
Create this file in your project root:

```bash
# Production Domain
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
SITE_URL=https://yourdomain.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Security
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://yourdomain.com
```

## Production Build Commands
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "goldsbet" -- start
pm2 save
pm2 startup
```

## Hostinger Specific Configuration

### 1. Node.js Setup in Hostinger
- Node.js Version: 18.x or 20.x
- Application Root: /public_html
- Startup File: server.js (if using custom server)

### 2. File Structure in Hostinger
```
public_html/
├── .next/           # Build output
├── public/          # Static files
├── package.json     # Dependencies
├── next.config.ts   # Next.js config
├── server.js        # Custom server (optional)
└── node_modules/    # Dependencies
```

### 3. Custom Server (Optional)
Create `server.js` for better control:

```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
```

## Cloudflare Configuration

### 1. Page Rules
Create these page rules in Cloudflare:

| URL Pattern | Settings |
|-------------|----------|
| `yourdomain.com/*` | Cache Level: Cache Everything, Edge Cache TTL: 1 month |
| `yourdomain.com/api/*` | Cache Level: Bypass |
| `yourdomain.com/_next/*` | Cache Level: Cache Everything, Edge Cache TTL: 1 year |

### 2. Security Rules
- Security Level: Medium
- Bot Fight Mode: ON
- Challenge Passage: 30 minutes
- Browser Integrity Check: ON

### 3. Speed Settings
- Auto Minify: HTML, CSS, JS
- Brotli Compression: ON
- Rocket Loader: ON
- Mirage: ON
- Polish: Lossless

## DNS Records Setup

### In Cloudflare DNS:
| Type | Name | Content | TTL | Proxy |
|------|------|---------|-----|-------|
| A | @ | [Hostinger IP] | Auto | 🟠 Proxied |
| A | www | [Hostinger IP] | Auto | 🟠 Proxied |
| CNAME | api | [Hostinger IP] | Auto | 🟠 Proxied |

### In Namecheap:
- Nameserver 1: ns1.cloudflare.com
- Nameserver 2: ns2.cloudflare.com

## Performance Optimization

### 1. Next.js Config Optimizations
```typescript
// next.config.ts
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
  },
  
  // Enable SWC minification
  swcMinify: true,
  
  // Optimize bundle
  experimental: {
    optimizePackageImports: ['@next/font'],
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
    ];
  },
};
```

### 2. Service Worker Optimization
Your existing `public/sw.js` is already optimized for production.

## Monitoring & Analytics

### 1. Google Analytics Setup
Add to `src/app/layout.tsx`:

```typescript
// Add this script to the head section
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
  }}
/>
```

### 2. Performance Monitoring
- Core Web Vitals monitoring
- Real User Monitoring (RUM)
- Error tracking with Sentry (optional)

## Security Checklist

- ✅ HTTPS enabled (Cloudflare SSL)
- ✅ Security headers configured
- ✅ CSP (Content Security Policy) implemented
- ✅ Bot protection enabled
- ✅ DDoS protection active
- ✅ WAF (Web Application Firewall) enabled

## Backup Strategy

### 1. Code Backup
- Git repository (already set up)
- Regular commits and pushes

### 2. Database Backup (if applicable)
- Hostinger automatic backups
- Manual export before major changes

### 3. File Backup
- Hostinger file manager backup
- Cloudflare cache as secondary backup

## Troubleshooting

### Common Issues:
1. **DNS Propagation**: Wait 24-48 hours
2. **SSL Issues**: Check Cloudflare SSL settings
3. **Performance**: Monitor Core Web Vitals
4. **Caching**: Clear Cloudflare cache if needed

### Support Contacts:
- Hostinger: Live chat in hPanel
- Cloudflare: Community forum
- Namecheap: Live chat support
