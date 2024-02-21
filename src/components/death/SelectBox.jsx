import styled from 'styled-components';

const SelectBox = (props) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    props.onChange(selectedValue);
    console.log(selectedValue);
  };

   return (
    <Select onChange={handleChange} >
      {props.options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </Select>      
   );
};

const Select = styled.select`
  width: 250px;
  height: 60px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid #A8A8A8;
  color: #3D3D3D;
  font-weight: 500;
  font-size: 24px;
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none;

  &:focus {
    border-color: #4B4EFC;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  }
`;

export default SelectBox;