import GoogleCacheRevalidator from "@/components/shared/google-cache-revalidator";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <GoogleCacheRevalidator tag="academia-list" />
      {children}
    </div>
  );
}
