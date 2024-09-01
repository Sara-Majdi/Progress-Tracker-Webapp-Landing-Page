import { Feature } from "./Feature";

const features = [
  {
      title: 'Integration System',
      description: 'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.'
  },
  {
      title: 'Goal setting and tracking',
      description: 'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.'
  },
  {
      title: 'Secure data encryption',
      description: 'With end-to-end encryption, your data is securely stored and protected from unauthorized access.'
  }
]

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto"></div>
        <p className="text-center text- xl text-white/70 px-4 mt-5">
          Enjoy customizable lists, team work tools, and smart tracking all in 
          one place. Set tasks, get reminders, and see your progress simply and 
          quickly.
        </p>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description}) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
