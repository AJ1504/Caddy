export async function callResearchApi(query: string) {
  const response = await fetch("/api/research", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  if (!response.ok) {
    throw new Error("API call failed");
  }

  return response.json();
}
