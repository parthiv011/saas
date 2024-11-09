export async function apiGet(path: string, query: any = {}) {
  const url = new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`);

  Object.keys(query).forEach((key) => {
    url.searchParams.append(key, query[key]);
  });

  const response = await fetch(url.toString(), { method: 'GET' });
  console.log(response);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return await response.json();
}

export async function apiPost(path: string, data: any) {
  const url = new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}`);

  const response = await fetch(`${url}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return await response.json();
}
