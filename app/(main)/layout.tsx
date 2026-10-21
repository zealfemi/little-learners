import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="px-4 md:px-12.5 py-5 flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
