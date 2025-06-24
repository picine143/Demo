
import Hero from "@/components/blocks/hero";
import CatagoryCard from "@/components/minors/CatagoryCard";

export default function Home() {
  return (
    <div className="w-full justify-center ">
      
      <Hero />
      <section className="flex flex-col md:flex-row gap-8 ">
        <CatagoryCard
          Heading="Singers"
          Description="This is a test to check the text wrap capacity of the card item it does work but how long will it work."
          btn_name="Sing"
          btn_address="/artists"
          img_url="/singer.png"
        />
        <CatagoryCard
          Heading="Dancers"
          Description="This is a test to check the text wrap capacity of the card item it does work but how long will it work."
          btn_name="Dance"
          btn_address="/artists"
          img_url="/dancer.png"
        />
        <CatagoryCard
          Heading="DJ's"
          Description="This is a test to check the text wrap capacity of the card item it does work but how long will it work."
          btn_name="Jazz"
          btn_address="/artists"
          img_url="/dancer.png"
        />
      </section>
    </div>
  );
}
