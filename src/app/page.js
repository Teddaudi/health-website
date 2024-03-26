import Main from "../components/Main";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";

const images = [
  { src: 'https://img.freepik.com/free-photo/two-african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare_627829-13783.jpg' },
  { src: 'https://img.freepik.com/free-photo/set-sports-clothes-healthy-snacks_23-2148241577.jpg' },
  { src: 'https://img.freepik.com/free-photo/box-nuts-spices-wood-table_23-2148262109.jpg' },
];
export default function Home() {
  return (
    <>
     <Hero images={images}/>
     <Main/>
     <Testimonials/>
    </>
  );
}
