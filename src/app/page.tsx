import Image from "next/image";

async function getRandomDog() {
  let headersList = {
    "Accept": "*/*"
   }
   
   let response = await fetch("https://dog.ceo/api/breeds/image/random", { 
     method: "GET",
     headers: headersList
   });
   
   let data = await response.text();
   return data;
}

export default async function Page() {
  let randomDog = await getRandomDog();
  let randomDogParsed = JSON.parse(randomDog);
  return (
    <>
      <h1>Dogs Are Awesome</h1>
      <p>Here is a picture of a random awesome dog. To see other dogs use the navigation menu.</p>
      <img src={randomDogParsed.message} alt="dog" />
    </>
  );
}
