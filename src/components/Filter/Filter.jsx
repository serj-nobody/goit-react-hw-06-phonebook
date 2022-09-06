import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "redux/actions";

// import PropTypes from 'prop-types';
import { FilterContainer, FilterLabel, FilterInput } from "./Filter.styled";



const filterInputID = nanoid();

export const Filter = () => {
  const filter = useSelector(store => store.filter);

  const dispatch = useDispatch();

  const onFilterContacts = ({target}) => {
    const action = filterContacts(target.value);
    dispatch(action);
  }

  return (
    <FilterContainer>
      <FilterLabel htmlFor={filterInputID}>Find contact by name:</FilterLabel>
      <FilterInput
        id={filterInputID}
        type="text"
        name="name"
        value={filter}
        onChange={onFilterContacts}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FilterContainer>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired,
// }