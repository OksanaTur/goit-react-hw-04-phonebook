import propTypes from 'prop-types';
import { FormInput } from 'components/PhonebookForm/Phonebook.styled';
import { FilterBox, FilterInput } from './PhonebookFilter.styled';

export const PhonebookFilter = ({ value, onChange }) => {
    return (
        <FilterBox>
            <FormInput htmlFor='filter'>Find contacts by name</FormInput>
            <div>
                <FilterInput
                            type="text"
                            name="filter"
                            value = {value}
                            onChange = {onChange}
                          /></div>
                        
        </FilterBox>
    )
}

PhonebookFilter.propTypes = {
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
};