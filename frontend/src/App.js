import React, { Fragment, useEffect, useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch('http://localhost:8080/');
      const data = await response.json();

      try {
        console.log(data);
        setLoading(false);
        setFilm(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <Fragment>
      <header>
          <h1>My Film List: React Front End</h1>
        <div className="header">
          <a href="http://localhost:8080">View All Film</a>
          <a href="http://localhost:8080/add-film">Add New Film</a>
        </div>
      </header>

      <div className="">
        {loading ? (
          <div>Loading</div>
        ) : (
            <div className="film-cards">
              {film.map((data) => (
                <div className="film-card" key={data._id}>
                  <ul>
                    <li>
                      <h1 className="film-title">
                        <a href="/{data.id}">{data.name}</a>
                      </h1>
                    </li>
                    <li>
                      <img className="film-img" src={data.image} alt={data.name} />
                    </li>
                    <li>
                      <p className="film-description" >{data.description}</p>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
      </div>
      <div>
        <h1 className="title" >Add New Film</h1>
        <form method="POST" action="http://localhost:8080/add-film">
          <div>
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Image</label>
            <input type="text" name="image" required />
          </div>
          <div>
            <label>Description</label>
            <input type="text" name="description" required />
          </div>

          <div>
            <button type="submit">Add Film</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default App;
