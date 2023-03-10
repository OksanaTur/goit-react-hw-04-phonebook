import propTypes from 'prop-types';
import { PhonebookItem } from 'components/PhonebookItem/PhonebookItem';
import { List } from './PhonebookList.styled';

export const PhonebookList = ({ contacts, onDeleteButton }) => {
    return (
        <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <PhonebookItem
              key={id}
              name={name}
              id={id}
              number={number}
              onClick={onDeleteButton}
            />
          );
        })}
        </List>
    )
}

PhonebookList.propTypes = {
    contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteButton: propTypes.func.isRequired,
}