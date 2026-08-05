"use server";

export async function initWebsite(clientName: string) {
  const googleListaAcademiaURL = process.env.GOOGLE_SCRIPT_LIST_ACADEMIA;

  if (!googleListaAcademiaURL) {
    throw new Error("GOOGLE_SCRIPT_LIST_ACADEMIA is not set");
  }

  console.log("Google Script URL", googleListaAcademiaURL);
  console.log("Client Name", clientName);

  const response = await fetch(googleListaAcademiaURL, {
    method: "POST",
    body: JSON.stringify({ clientName }),
  });
  const data = await response.json();
  return data;
}
