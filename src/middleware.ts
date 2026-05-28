// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Create a secure random string (Nonce)
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  
  // 2. Build the Content Security Policy string
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${
      process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ""
    };
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://images.unsplash.com https://res.cloudinary.com;
    font-src 'self' https://fonts.gstatic.com;
    frame-src 'none';
    object-src 'none';
    connect-src 'self' https://www.google-analytics.com;
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  // 3. Clone existing headers and inject our CSP values
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce); // Sent upstream for layout.tsx to read
  requestHeaders.set('Content-Security-Policy', cspHeader);

  // 4. Create the response object, attaching our modified headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  
  // 5. Explicitly set the CSP header so the browser reads and enforces it
  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

// 6. The Filtering Mechanism (The Matcher)
export const config = {
  matcher: [
    /*
     * Intercept every request EXCEPT:
     * - api routes
     * - static chunks (_next/static)
     * - images (_next/image)
     * - system icons / manifest files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|[^?]*\\.(?:html|css|js(?!on)|jpe?g|webp|png|gif|svg|ico|woff2?|map|wasm)).*)',
  ],
};