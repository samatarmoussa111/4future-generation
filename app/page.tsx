import Banner from "@/components/banner/banner";
import Hero from "@/components/hero/hero";
import Navigation from "@/components/navigation/navigation";
import Wrapper from "@/components/wrapper/wrapper";

export default async function Home() {
  const posts = await fetch("http://127.0.0.1:1337/api/posts").then(
    (response) => response.json()
  );
  return (
    <>
      <Wrapper>
        <Navigation />
      </Wrapper>
      <Banner />
      <Hero />
      {posts.data.map((post: any) => (
        <div key={post.id}>
          <h1>{post.attributes.title}</h1>
        </div>
      ))}
    </>
  );
}
