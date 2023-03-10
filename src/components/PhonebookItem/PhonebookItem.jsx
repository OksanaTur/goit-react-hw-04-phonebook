import propTypes from 'prop-types';
import { PhoneItem, DeleteBtn } from './PhonebookItem.styled'; 

export const PhonebookItem = ({ id, name, number, onClick }) => {
    return (
        <PhoneItem >
            <span>{name}:</span>
            <span>{number}</span>
            <DeleteBtn type='button' onClick={() => onClick(id)}>Delete</DeleteBtn>
        </PhoneItem >
    )
}

PhonebookItem.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
}