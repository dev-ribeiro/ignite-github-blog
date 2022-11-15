import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 54rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    resize: none;
    border: 1px solid ${(props) => props.theme['blue-600']};
    border-radius: 6px;
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme['gray-200']};

    input[type='text']::placeholder {
      text-align: center;
      vertical-align: bottom;
      font-size: 1rem;
      color: ${(props) => props.theme['blue-300']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const PublicationsCountContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme['gray-100']};
  }

  span {
    color: ${(props) => props.theme['blue-200']};
  }
`
