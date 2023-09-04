import PropTypes from "prop-types";
import './top-bar.css'

export const TopBar = ({ nome }) => {
    return (
      <div>
        <header className="top-bar">
          <h1 className='title'>{nome}</h1>
        </header>
      </div>
    );
  };

TopBar.propTypes = {
    nome: PropTypes.string.isRequired,
}