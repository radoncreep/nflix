import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    padding: 78px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;
    max-width: 670px;
    margin: auto;
    width: 100%;

    &:first-of-type{
        margin-top: 3em;
        
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 16px;
    font-weight: normal;
    background-color: #303030;
    padding: .8em 1.2em;
    align-items: center;
    user-select: none;

    img {
        filter: brightness(0) invert(1);
        width: 20px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }
`;

export const Body = styled.div`
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 16px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    white-space: pre-wrap;
    padding: 1em 1.2em;
    user-select: none;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;


export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin: 0 0 8px 0;
    color: #fff;
    text-align: center;
`;


