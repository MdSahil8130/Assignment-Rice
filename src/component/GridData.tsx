
const GridData = () => {
    const words = ["Hello", "World", "React", "JavaScript", "Programming", "Web", "Development", "Tailwind", "CSS", "HTML", "Node", "Express", "MongoDB", "Redux", "TypeScript", "Python", "Java", "C#", "Ruby", "PHP"];
    const randomWord = () => words[Math.floor(Math.random() * words.length)];
    const data = Array.from({ length: 33 }, randomWord);
  
    return (
      <div className="grid grid-cols-11 p-4 mt-8 mb-8">
        {data.map((item, index) => (
          <div key={index} className="border  p-2">
            {item}
          </div>
        ))}
      </div>
    );
  };
  

export default GridData
