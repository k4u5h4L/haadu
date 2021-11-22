import Albums from "@/components/Albums/Albums";
import Banner from "@/components/Banner/Banner";
import Featured from "@/components/Featured/Featured";
import Navbar from "@/components/Navbar/Navbar";
import Songs from "@/components/Songs/Songs";

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Songs />
            <Albums />
            <Featured />
        </>
    );
}

export default Home;
