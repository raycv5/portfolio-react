function About() {
  return (
    <section className="about-me">
      <div className="container">
        <div className="left-about">
          <h2 className="underline">about.</h2>
          <p>
            Hello! I'm <span className="span-blue bold">Rayhan</span>, a
            sophomore student pursuing a degree in Software Engineering at
            Bahçeşehir University in Istanbul, Turkey. Based between Indonesia
            and Turkey, I embrace a global perspective on IT, drawing
            inspiration from both cultures. I'm passionate about coding,
            software development, and staying at the forefront of technology
            trends.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            tempora nobis maxime hic officiis laborum ipsum ullam distinctio
            deserunt, voluptas nesciunt quis repudiandae quisquam voluptates
            quaerat delectus, aperiam earum nulla.
          </p>
        </div>

        <div className="right-about">
          <img
            src={require("../assets/images/about-me.png")}
            alt=""
            className="about-img"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default About;
