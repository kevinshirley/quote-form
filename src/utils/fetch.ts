export const post = async (url: string, payload: any) => {
  try {
    const response = await fetch(url, { 
      method: 'POST',
      body: JSON.stringify(payload),
      headers: new Headers({
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `boundary=${payload._boundary}`,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
