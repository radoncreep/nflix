import { HeaderContainer } from '../container/Header';
import { FaqsContainer } from '../container/Faqs';
import FooterContainer from '../container/Footer';
import { JumbotronContainer } from '../container/Jumbotron';
import { Feature, OptForm } from '../components';


export const Home = ({ children, ...restProps }) => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>
                        Watch Anywhere. Cancel at any time.
                    </Feature.SubTitle>

                    <OptForm>
                        <OptForm.Input placeholder="Email Address"/>
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your mail to create or 
                            restart you membership
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer> 
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};