// pages/api/health.js or app/api/health/route.js
export default function handler(req, res) {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
}

// For App Router (app/api/health/route.js):
// export async function GET() {
//   return Response.json({ status: 'OK', timestamp: new Date().toISOString() });
// }