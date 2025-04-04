import HeaderComp from "./components/header/Header";
import MainComp from "./components/main-section/Main";
import ServicesComp from "./components/services/Services";
import StatsComp from "./components/stats/Stats";
import TestimonialComp from "./components/testimonials/Testimonials";
import FormComp from "./components/form/Form";
import WhyChooseComp from "./components/why choose/WhyChoose";
import QuestionsComp from "./components/question/Question";
import FooterComp from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <HeaderComp></HeaderComp>
      <MainComp></MainComp>
      <ServicesComp></ServicesComp>
      <WhyChooseComp></WhyChooseComp>
      <TestimonialComp></TestimonialComp>
      <StatsComp></StatsComp>
      <QuestionsComp></QuestionsComp>
      <FormComp></FormComp>
      <FooterComp></FooterComp>
    </div>
  );
}
