import PropTypes from "prop-types";

const ListCast = ({cast, onChoice}) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr)",
      gap: "1rem",
      marginBottom: "1rem"
    }}>
      {cast.map((member) => (
        <a key={member.id} data-tooltip={member.name} onClick={() => onChoice(member)}>
          <img src={`/images/${member.slug}_tn.svg`} alt={member.name}/>
        </a>
      ))}
    </div>
  );
}

ListCast.propTypes = {
  cast: PropTypes.object,
  onChoice: PropTypes.func
}

export default ListCast;
