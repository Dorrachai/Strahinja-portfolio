import { Layout } from "@/components/Layout";

const collaborations = [
  "The Game Assembly Stockholm",
  "Audio Production Academy",
];

const About = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-3xl space-y-12">
          {/* Content */}
          <div>
            <h1 className="text-display mb-8 animate-fade-in-up">About</h1>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p>
                <span className="text-foreground">Strahinja Velickovic</span> is a game 
                sound designer creating music, sound effects and audio worlds 
                that give games their atmosphere and impact.
              </p>
              <p>
                Most recently he created the audio for 
                <span className="text-foreground"> Bony Tony: The Revenge</span>, an action-platformer 
                produced together with The Game Assembly Stockholm and the 
                Audio Production Academy — every sound and system built from 
                scratch in a custom engine.
              </p>
              <p>
                He works on commercial, indie and student game projects, always 
                looking for games that deserve a soundtrack people remember.
              </p>
            </div>
          </div>

          {/* Selected Collaborations */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-label mb-6">Selected Collaborations</h2>
            <ul className="space-y-3">
              {collaborations.map((name) => (
                <li key={name} className="text-lg">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-label mb-6">Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {["Game Audio", "Sound Design", "Music", "Audio Implementation", "Foley & Field Recording"].map((area) => (
                <span
                  key={area}
                  className="text-sm border border-border px-4 py-2"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
