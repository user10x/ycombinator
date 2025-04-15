import SearchForm from "@/app/components/SearchComponent";

export default async function Home({searchParams}: { searchParams: Promise<{query?: string}>}) {

    const query = (await searchParams).query;
    return (
        <div>
            <section className="pink_container">
                <h1 className="header">Pitch your startup <br /> Connect with Entrepreneurs </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, Get noticed in Virtual Competitions
                </p>
                <SearchForm query={query}></SearchForm>


            </section>

        </div>
    );
}
