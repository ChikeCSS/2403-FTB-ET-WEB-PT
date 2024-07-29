import { useEffect, useState } from 'react';
import { useGetPlayersQuery } from '../api/puppyBowlApi'
import { useNavigate } from 'react-router-dom';
//components
import PlayerCard from './PlayerCard';
import AddPuppyForm from './AddPuppyForm';
import SearchBar from './SearchBar';

const Players = () => {
  const navigate = useNavigate();
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading, refetch } = useGetPlayersQuery();

  const [searchParameter, setSearchParameter] = useState('');

  useEffect(()=>{
    refetch();
  },[])

  // Show a loading message while data is being fetched
  if (isLoading) {
   return <section><p>Players are loading...</p></section>
  } 

  // Show an error message if the fetch failed
  if (error) {
    return <section><p>{error.data.error.message}</p></section>
  }

  const playersToDisplay = searchParameter && data?.data?.players ? data?.data?.players.filter(player => player.name.toLowerCase().includes(searchParameter.toLowerCase())) : data?.data?.players

  return (
    <section >
        <AddPuppyForm />
        <h1>All Players</h1>
        <SearchBar searchParameter={searchParameter} setSearchParameter={setSearchParameter}/>
      <div className="players">
         {/* Map through the data array and generate a div for each player */}
        {playersToDisplay && playersToDisplay.map((player) => (
        // Use the player's ID as the key for this div
            <button className="player-card"  key={player.id} onClick={() => navigate(`/players/${player.id}`)}>
                <PlayerCard  name={player.name} imageUrl={player.imageUrl}/>
            </button>
      ))}
      </div>
    </section>
  );
};

// Export the component so it can be imported and used in other files
export default Players;
