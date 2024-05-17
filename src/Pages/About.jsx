function About() {
  return (
    <footer className="w-100 h-screen flex items-center justify-center">
      <div className="border border-gray-500 rounded-full text-white text-center font-black">
        <div className="container mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">FlickFusion</h2>
            <p className="text-sm">Explore movies of all genres</p>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Welcome to FlickFusion, the ultimate destination for movie
            enthusiasts seeking an unparalleled cinematic experience. Our
            platform is a meticulously curated collection of films that span
            across genres, eras, and cultures, catering to the diverse tastes of
            our discerning audience.
          </p>
          <p className="text-gray-400 leading-relaxed mt-2">
            At FlickFusion, we believe that movies are more than just
            entertainment - they are works of art that have the power to
            transport us to different worlds, evoke profound emotions, and leave
            lasting impressions. Our team of passionate cinephiles has scoured
            the globe to bring you the finest cinema from every corner of the
            world, ensuring that you never run out of captivating stories to
            immerse yourself in.
          </p>
          <p className="text-gray-400 leading-relaxed mt-2">
            Whether you are a fan of heart-pounding action flicks,
            thought-provoking dramas, side-splitting comedies, or awe-inspiring
            documentaries, FlickFusion has something for everyone. Our
            user-friendly interface and advanced search capabilities allow you
            to effortlessly navigate through our vast library, discovering
            hidden gems and rediscovering beloved classics with ease.
          </p>
          <p className="text-gray-400 leading-relaxed mt-2">
            Join our vibrant community of movie lovers, where you can engage in
            lively discussions, share your thoughts, and connect with
            like-minded individuals who share your passion for cinema. At
            FlickFusion, we believe that the magic of movies lies in the shared
            experience and the ability to transport ourselves to different
            realms through the power of storytelling.
          </p>
          <div className="mt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} FlickFusion. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default About;
