import styled from "styled-components";

type LocationInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleApiCall: () => void;
};

const Container = styled.div`
  top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const SearchInput = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  height: 23px;
  width: 100%;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: #f5f5f5;
`;

const SubmitButton = styled.input`
  background-color: #04aa6d;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 10px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
`;

export default function LocationInput({
  handleChange,
  handleApiCall,
}: LocationInputProps) {
  return (
    <Container>
      <h1>React Weather App</h1>
      <label>Enter Location</label>
      <SearchInput onChange={handleChange} />
      <SubmitButton type="submit" onClick={handleApiCall} value="Search" />
    </Container>
  );
}
