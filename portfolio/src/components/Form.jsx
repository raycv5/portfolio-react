function Form() {
  return (
    <section className="form" id="form">
      <div className="container">
        <div className="left-form">
          <h2 className="underline">
            get in <span className="span-blue">touch</span>.
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, neque
            animi tempora accusamus doloremque deleniti et modi, reprehenderit
            libero, in blanditiis aliquam possimus. Dignissimos a, quam maiores
            voluptatem quos fugiat.
          </p>
        </div>
        <div className="right-form">
          <form action="">
            <div className="input-box">
              <label for="">Name</label>
              <input type="text" />
            </div>
            <div className="input-box">
              <label for="">Email</label>
              <input type="email" />
            </div>
            <div className="input-box">
              <label for="">Message</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
