export async function trackPlunkEvent(event: string, email: string) {
  await fetch('https://api.useplunk.com/v1/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.PLUNK_API_KEY}`,
    },
    body: JSON.stringify({ event, email }),
  });
}