export default async function Page({ params }) {
    const { slug } = params;
  
    const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`)
    const data = await res.json()
  
    return (
      <main>{data.name}</main>
    );
}