import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <header className="header">
            <img
              src="../public/images/image-daniel.jpg"
              alt="imgErr"
              className="img"
            />
            <div className="headerAbout">
              <h4>Daniel Clifford</h4>
              <p>Verified Graduates</p>
            </div>
          </header>
          <p className="fs-l">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </p>
          <p className="fs-s">
            "I was an EMT for many years before I joined the bootcamp. I've ben
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup."
          </p>
        </div>
        <div className="card">
          <header className="header">
            <img
              src="../public/images/image-jonathan.jpg"
              alt="imgErr"
              className="img"
            />
            <div className="headerAbout">
              <h4>Jonathan</h4>
              <p>Verified Graduates</p>
            </div>
          </header>
          <p className="fs-l">
            The team was very supportive and kept me motivated.
          </p>
          <p className="fs-s">
            "I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself."
          </p>
        </div>
        <div className="card">
          <header className="header">
            <img
              src="../public/images/image-jeanette.jpg"
              alt="imgErr"
              className="img"
            />
            <div className="headerAbout">
              <h4>Jeanette Harmon</h4>
              <p>Verified Graduates</p>
            </div>
          </header>
          <p className="fs-l">An overall wonderful and rewarding experience.</p>
          <p className="fs-s">
            "Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love."
          </p>
        </div>
        <div className="card">
          <header className="header">
            <img
              src="../public/images/image-patrick.jpg"
              alt="imgErr"
              className="img"
            />
            <div className="headerAbout">
              <h4>Patrick Abrams</h4>
              <p>Verified Graduates</p>
            </div>
          </header>
          <p className="fs-l">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>
          <p className="fs-s">
            "The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people."
          </p>
        </div>
        <div className="card">
          <header className="header">
            <img
              src="../public/images/image-kira.jpg"
              alt="imgErr"
              className="img"
            />
            <div className="headerAbout">
              <h4>Kira Whittle</h4>
              <p>Verified Graduates</p>
            </div>
          </header>
          <p className="fs-l">
            Such a life-changing experience. Highly recommended!
          </p>
          <p className="fs-s">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during, interviews as an
            example of my development experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>
      </div>
      <footer>Design From Front-end Mentor</footer>
    </>
  );
}

export default App;
