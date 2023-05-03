import { useState } from "react";
import BotCollection from "./botCollection";

function YourBotArmy() {
  const [renderBots, setrenderBots] = useState([]);

  function renderBot(bot) {
    if (!renderBots.includes(bot)) {
      setrenderBots([...renderBots, bot]);
    }
  }

  function deleteBot(bot) {
    fetch(`https://botdatabase.onrender.com/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        const newrenderBots = renderBots.filter((b) => b.id !== bot.id);
        setrenderBots(newrenderBots);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="addBot">
      <h1>CLICK ON A BOT TO ADD IT TO YOUR ARMY!</h1>
      <h2>Bot Army</h2>
      
      <div className="botCard">
        {renderBots.map((bot) => (
          <div key={bot.id} className="card" onClick={() => deleteBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <div className="card-content">
              <h3>{bot.name}</h3>
              <p>Bot Class: {bot.bot_class}</p>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Catchphrase: {bot.catchphrase}</p>
              <button className="deleteCard" onClick={() => deleteBot(bot)}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      <BotCollection onrenderBot={renderBot} />
    </div>
  );
}

export default YourBotArmy;