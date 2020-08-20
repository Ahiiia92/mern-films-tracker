import React, { Fragment, useEffect, useState } from 'react';

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
        <a href="http://localhost:8080">View All Film</a>
        <a href="http://localhost:8080/add-film">Add New Film</a>
      </header>

      <div>
        {loading ? (
          <div>Loading</div>
        ) : (
            <div>
              {film.map((data) => (
                <div key={data._id}>
                  <ul>
                    <li>
                      <h1>
                        <a href="/{data.id}">{data.name}</a>
                      </h1>
                    </li>
                    <li>
                      <img src={data.image} alt={data.name} />
                    </li>
                    <li>
                      <p>{data.description}</p>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
      </div>
      <div>
        <h1>Add New Film</h1>
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
