export const getServerSideProps = async () => {
    try {
        const query = '*[_type == "event"]';
        const events = await client.fetch(query);

        const bannerQuery = '*[_type == "banner"]';
        const bannerData = await client.fetch(bannerQuery);

        console.log("Events:", events);
        console.log("Banner Data:", bannerData);

        return {
            props: { events, bannerData }
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: { events: [], bannerData: [] } 
        };
    }
};