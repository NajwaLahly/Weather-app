import styled from "styled-components";

type ContainerProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleApiCall: () => void;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function Container({
  handleChange,
  handleApiCall,
}: ContainerProps) {
  return (
    <Wrapper>
      <label>Enter Location</label>
      <input onChange={handleChange}></input>
      <button onClick={handleApiCall}>Search</button>
    </Wrapper>
  );
}
