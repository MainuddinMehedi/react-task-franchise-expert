import BestServicesCategory from "../components/BestServicesCategory";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";
import InterestedWorking from "../components/InterestedWorking";
import MeetVisionary from "../components/MeetVisionary";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
// import Testimonials from "../components/Overlaping";
import TabSection from "../components/TabSection";
import Testimonials from "../components/Testimonials";
import TrustedCompanies from "../components/TrustedCompanies";
// import Try from "../components/Try";
import Layout from "../layouts/Layout";
import SectionSpacingHome from "../layouts/SectionSpacingHome";

const Home = () => {
  return (
    <div>
      <Layout>
        <Navbar />
      </Layout>
      <div>
        <div className="flex justify-end ">
          <div className="w-[91.6%]">
            <Hero />
          </div>
        </div>

        {/* wrapping with a layout for common section gap */}
        <SectionSpacingHome>
          <TrustedCompanies />
          <TabSection />
          <Layout>
            <MeetVisionary />
            <BestServicesCategory />
          </Layout>
          <InterestedWorking />
          <Testimonials />
          <FAQ />
          <GetInTouch />
          <Subscribe />
          <Footer />

          {/* Playing with to figure things out. */}
          {/* <Try /> */}
          {/* <Testimonials /> */}
        </SectionSpacingHome>
      </div>
    </div>
  );
};

export default Home;
