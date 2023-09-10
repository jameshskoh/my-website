import { Header } from "./components/Header.tsx";
import { Sidebar } from "./components/Sidebar.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer } from "./components/Footer.tsx";
import { MainContent } from "./components/MainContent.tsx";
import data from "./data/data.json";
import { Data } from "./data/Data.ts";
import { Article } from "./components/Article/Article.tsx";

type MainLayoutProps = {
  backgroundImageUrls: string[];
};

function MainLayout({ backgroundImageUrls }: MainLayoutProps) {
  return (
    <>
      <div className="flex">
        <div className="m-5 columns-3 bg-gray-600">
          <Header />
          <Sidebar />
        </div>
        <div className="m-5 columns-9 bg-amber-700">
          <MainContent>
            {/* where the content is rendered */}
            <Outlet />
          </MainContent>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  const { backgroundImageUrls, articles } = data as Data;

  const routerChildren = articles.map((article) => {
    return {
      path: article.url,
      element: <Article content={article} />,
    };
  });

  const router = createBrowserRouter([
    {
      element: <MainLayout backgroundImageUrls={backgroundImageUrls} />,
      children: routerChildren,
    },
  ]);

  return (
    <div className="App fixed h-screen w-screen overflow-hidden bg-gray-400">
      <RouterProvider router={router} />
    </div>
  );
}
