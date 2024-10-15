import { Banner } from "../components/banner";
import { Header } from "../components/header";

export const Home = () => {
  return (
    <div className="flex flex-col p-6 bg-themeBg">
      <Header />
      <Banner />
    </div>
  );
};
