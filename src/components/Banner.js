import Hero from "./Hero";
import Main from "./Main";

export default function Banner() {
    const images = [
        { src: 'https://img.freepik.com/free-photo/box-nuts-spices-wood-table_23-2148262109.jpg' },
        { src: 'https://img.freepik.com/free-photo/two-african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare_627829-13783.jpg' },
        { src: 'https://img.freepik.com/free-photo/set-sports-clothes-healthy-snacks_23-2148241577.jpg' },
    ];
    return (
        < div >
            <Hero images={images} />
            <Main />
        </ div>
    )
}