import Footer from "@/app/components/shared/Footer";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
