interface Skills {
  category: string;
  skills: string[];
}
import skillsData from "./data.json";

export const Skills = () => {
  const skills: Skills[] = skillsData.technicalSkills;
  return (
    <div className="flex flex-col  text-primaryTextColor">
      <div className="text-5xl lg:text-8xl font-bold pt-10">
        <h1>TECHNICAL</h1>
        <h1>SKILLS</h1>
      </div>

      <div className="flex flex-row w-full pt-20">
        <div className="hidden md:block w-1/3"></div>
        <div className="w-full md:w-2/3">
          {skills.map((skillCategory, index) => (
            <div
              className="bg-skillsDarkAccent mb-4 rounded-md p-12 shadow-md text-secondaryTextColor"
              key={index}
            >
              <span className="text-xl md:text-2xl">
                {skillCategory.category}
              </span>
              <div className="flex flex-wrap gap-4 pt-6">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-md rounded-md bg-skillsLightAccent px-5 py-1.5 text-center font-semibold"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
