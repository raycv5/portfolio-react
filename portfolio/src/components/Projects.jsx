function Projects() {
  return (
    <section class="projects" id="project">
      <div class="container">
        <h2 class="underline">
          <span class="span-blue">projects</span>.
        </h2>
        <div class="projects-container">
          <div class="project-list">
            <img
              src={require("../assets/images/instagram.png")}
              alt=""
              className="ig-img"
            />
            <div class="project-desc">
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                amet aliquid natus odit
              </p>
            </div>
            <div class="card-bottom">
              <div>
                <a href="https://google.com">GitHub</a>
              </div>
              <div>
                <a href="https://google.com">Live</a>
              </div>
            </div>
          </div>

          <div class="project-list">
            <img
              src={require("../assets/images/instagram.png")}
              alt=""
              className="ig-img"
            />
            <div class="project-desc">
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                amet aliquid natus odit
              </p>
            </div>
            <div class="card-bottom">
              <div>
                <a href="https://google.com">GitHub</a>
              </div>
              <div>
                <a href="https://google.com">Live</a>
              </div>
            </div>
          </div>

          <div class="project-list">
            <img
              src={require("../assets/images/instagram.png")}
              alt=""
              className="ig-img"
            />
            <div class="project-desc">
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                amet aliquid natus odit
              </p>
            </div>
            <div class="card-bottom">
              <div>
                <a href="https://google.com">GitHub</a>
              </div>
              <div>
                <a href="https://google.com">Live</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
