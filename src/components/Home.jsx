import "../style/Home.css";

const Home = () => {
  return (
    <>
      <div className="landing">
        <p>Lorem Ipsum</p>

        <a href="https://www.npmjs.com/package/apollomatic">
          <button type="button" className="btn btn-outline-dark">
            Download NPM Package
          </button>
        </a>
      </div>
      <div className="package-desc">
        <h1>Describe the package + Gifs</h1>
      </div>
    </>
  );
};
export default Home;
