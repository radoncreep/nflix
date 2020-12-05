import { HeaderContainer } from '../Container/Header';
import { FaqsContainer } from '../Container/Faqs';
import FooterContainer from '../Container/Footer';
import { JumbotronContainer } from '../Container/Jumbotron';

export const Home = ({ children, ...restProps }) => {
    return (
        <>
            <HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
            </HeaderContainer>
        </>
    );
};