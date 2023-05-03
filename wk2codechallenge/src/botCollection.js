import { useEffect, useState } from "react";

function BotCollection(props) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("https://botdatabase.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      
      <h2>Bot Collection</h2>
      
      <div className="botCard">
        {bots.map((bot) => (
          <div key={bot.id} className="card" onClick={() => props.onrenderBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <div className="card-content">
              <h3>{bot.name}</h3>
              <p>Bot Class: {bot.bot_class}</p>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Catchphrase: {bot.catchphrase}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;