import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import back1 from "../back1.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        ` *[ _type == "author"] {
    name,
    bio,
    "authorImage" : image.asset -> url
  }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={back1} alt="Stars" className="absolute w-full h-screen object-cover" /> 
      <div className="lg:p-40 lg:pt-32  container mx-auto relative p-10">
        <section className="bg-indigo-400 bg-opacity-75 rounded-lg shadow-2xl lg:flex md:p-20 p-4">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive md:text-6xl text-2xl text-gray-800 mb-4">
              Hey there. I'm{" "}
              <span className="text-gray-300">{author.name}!</span>
            </h1>
            <div className="prose prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="vhxxdwxv"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
