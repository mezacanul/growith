export function getBaseUrl(window: Window): string | null {
  if (typeof window !== "undefined") {
    // Client-side: use window.location
    return `${window.location.protocol}//${window.location.host}`;
  }
  // Server-side: Not available; fallback to null
  return null;
}

export async function handleCopyUrl(
  websiteURL: string,
  setCopied: (copied: boolean) => void,
  baseUrl: string | null,
): Promise<void> {
  if (!websiteURL) return;
  try {
    await navigator.clipboard.writeText(`${baseUrl}${websiteURL}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  } catch {
    setCopied(false);
  }
}
