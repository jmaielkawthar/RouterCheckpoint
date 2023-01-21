import { useState } from 'react';
import "./App.css";
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import Filter from "./Components/Filter";
import { moviesData } from "./data";

function App() {
  const [data, setData] = useState(moviesData);
  const [textSearch, setTextSearch] = useState("");
  const [rating, setRating] = useState("");
  const handleSearch=(x)=>setTextSearch(x);
  const handleRating=(x)=>setRating(x);
  const handleDelete =(id) =>setData(data.filter(el =>el.id!==id));
  const handleAdd= (newMovie)=> setData([...data,newMovie]);
  const handleEdit=(editedMovie)=>setData(data.map(el=>el.id===editedMovie.id?editedMovie:el))
  return (
    <div className="App">
      <Filter textSearch={textSearch} rating={rating} handleSearch={handleSearch} handleRating={handleRating}/>
      <AddMovie  handleAdd={handleAdd}/>
      <MovieList list={data.filter(el=>el.name.toLowerCase().includes(textSearch.toLowerCase())&&el.rating>=rating)} handleDelete={handleDelete}  handleEdit={handleEdit}  />
     
    </div>
  );
}

export default App;
