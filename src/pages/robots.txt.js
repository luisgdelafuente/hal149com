export async function GET() {
  const envValue = import.meta.env.DISALLOW_INDEXING;
  const context = import.meta.env.CONTEXT;
  const branch = import.meta.env.BRANCH;
  const disallow = envValue === 'true';
  
  // Debug information
  const debugInfo = `# Debug Info:
# DISALLOW_INDEXING: "${envValue}" (type: ${typeof envValue})
# CONTEXT: "${context}"
# BRANCH: "${branch}"
# disallow: ${disallow}
`;
  
  const body = disallow
    ? `${debugInfo}
User-agent: *
Disallow: /`
    : `${debugInfo}
User-agent: *
Allow: /

Sitemap: https://hal149.com/sitemap.xml`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
