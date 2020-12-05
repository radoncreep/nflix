import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 4px solid #222;
    // text-align: center;
    padding: 165px 45px;
`;

export const Title = styled.h1`
    color: #fff;
    max-width: 640px;
    font-size: 30px;
    font-weight: 500;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 35px;
    };
`;

export const SubTitle = styled.h2`
    color: #fff;
    max-width: 640px;
    font-size: 20px;
    font-weight: 500;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 35px;
    };
`;