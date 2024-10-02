export default function About() {
  return (
    <div className="max-w-3xl mx-auto mt-[150px]">
      <div className="p-4 mt-8">
        <h1 className="text-3xl font-bold mb-6 text-dark dark:text-white">About Recipe Finder</h1>
        <p className="text-lg mb-4 text-dark dark:text-white">Recipe Finder is your go-to application for discovering delicious recipes from around the world. Whether you're a seasoned chef or a cooking novice, our platform offers a wide variety of recipes to suit every taste and skill level.</p>
        <p className="text-lg mb-4 text-dark dark:text-white">Our mission is to inspire culinary creativity and make cooking an enjoyable experience for everyone. With our extensive database of recipes, user-friendly interface, and personalized recommendations, you'll always find something exciting to cook.</p>
      </div>
      <div className="border-l-4 border-green-500 p-4 mt-8">
        <h2 className="text-xl font-semibold mb-2 text-lime-600">Key Features:</h2>
        <ul className="list-disc list-inside text-black dark:text-white">
          <li>Extensive recipe database</li>
          <li>Personalized recommendations</li>
          <li>Easy-to-use search functionality</li>
          <li>Save and organize your favorite recipes</li>
          <li>Share recipes with the community</li>
        </ul>
      </div>
    </div>
  )
}