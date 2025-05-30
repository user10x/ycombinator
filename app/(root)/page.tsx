import SearchForm from "@/components/SearchComponent";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from '@/sanity/lib/live';





export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

    const query = (await searchParams).query;


    const params = { search: query || null };



    console.log("query is ", query);

    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });


    console.log(JSON.stringify(posts, null, 2));

    // const posts = [
    //     {
    //         createdAt: new Date(),
    //         number_of_views: 55,
    //         author: {
    //             _id: 100,
    //             name: 'John Doe',
    //         },
    //         _id: 1,
    //         image: 'https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0',
    //         category: 'Robots',
    //         description: 'This is a lengthy description',
    //         title: 'We robots',
    //
    //     }
    // ]


    return (
        <div>
            <section className="pink_container">
                <h1 className="header">Pitch your startup <br /> Connect with Entrepreneurs </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, Get noticed in Virtual Competitions
                </p>
                <SearchForm query={query}></SearchForm>
            </section>
            <section className="section_container">
                <p className="subheading font-semibold">
                    {query ? `Search results for ${query}` : "All startups"}
                </p>
                <ul className="list">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupTypeCard) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : <p> No startups found</p>}
                </ul>
            </section>
            <SanityLive />
        </div>
    );
}
