import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => {
  return (
    <ul className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </ul>
  );
};

export default CardList;
