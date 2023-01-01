import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  min-width: 54rem;
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

  @media (max-width: 768px) {
    min-width: 0;
    max-width: 100%;
  }
`

export const PublicationsCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${(props) => props.theme['gray-100']};
  }

  span {
    color: ${(props) => props.theme['blue-200']};
  }

  @media (max-width: 768px) {
    * {
      font-size: 14px;
    }
  }
`
