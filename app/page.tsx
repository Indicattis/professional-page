import NamespaceComponent from "@/components/home/home-namespace";
import FaceComponent from "@/components/home/home-slider";
import VisualComponent from "@/components/home/visual";
import WebComponent from "@/components/home/web";
import HeaderComponent from "@/components/inc/header";
import visual_data_array from "@/data/json/visual_data";
import visual_serv_array from "@/data/json/visual_services";
import web_data_array from "@/data/json/web_data";
import web_serv_array from "@/data/json/web_services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-auto w-full relative">
      <HeaderComponent/>
      <FaceComponent/>
      <NamespaceComponent/>
      {/* <GridInfoComponent/> */}
      <WebComponent web_services={web_serv_array} web_data={web_data_array}/>
      <NamespaceComponent/>
      {/* <VisualComponent visual_data={visual_data_array} visual_services={visual_serv_array}/> */}
    </main>
  );
}
