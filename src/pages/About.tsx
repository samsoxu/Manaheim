import Badges from '../components/Badges'
import Card from '../components/Card'
import { TechStack } from '../constant'
import { layout } from '../styles'

const About = () => {
  const shuffledTechStack = [...TechStack].sort(() => Math.random() - 0.5)

  return (
    <div className={`${layout.fullPage} ${layout.defaultPadding}`}>
      <div className="grid grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-6">
          <Card className="text-left">
            <p>
              I am an experienced R&D Lead and Full-Stack Developer,
              specializing in delivering comprehensive software solutions across
              multiple industries.
            </p>
          </Card>
          <Card className="flex flex-col justify-items-start gap-6">
            <p className="text-3xl font-bold">Industries</p>
            <ul className="flex justify-center gap-4">
              <li>
                <Badges text="Financial" />
              </li>
              <li>
                <Badges text="Logistics" />
              </li>
            </ul>
          </Card>
          <Card className="flex flex-col justify-items-start gap-6">
            <p className="text-3xl font-bold">Tech Stack</p>
            <ul className="justify-left flex flex-wrap gap-2">
              {shuffledTechStack.map((items) => (
                <li key={items}>
                  <Badges text={items} />
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default About
