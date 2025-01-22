import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex flex-col">
        <div>{children}</div>
        <Toaster />
      </div>
    </>
  );
}
