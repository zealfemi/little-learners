import Footer from "../_components/Footer";
import Header from "../_components/Header";
import NotificationBar from "../_components/NotificationBar";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <NotificationBar />
      <div className="px-4 md:px-12.5 py-5 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
