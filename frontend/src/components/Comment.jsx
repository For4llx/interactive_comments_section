import styled from 'styled-components'

const Container = styled.article`
    padding: 1.5rem;
    display: flex;
    align-items: top;
    gap: 1.5rem;
    background-color: ${props => props.theme.white};
    border-radius: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
`

const Heading = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.theme.darkBlue};
`

const Tag = styled.div`
    padding: 1px 6px 1px 6px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.moderateBlue};
    border-radius: 2px;
`

const Paragraph = styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.theme.grayishBlue};
    line-height: 24px;
`

const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizeParagraph};
    color: ${props => props.red ? props.theme.softRed : props.theme.moderateBlue};
    fill: ${props => props.red ? props.theme.softRed : props.theme.moderateBlue};
    line-height: 24px;
    &:hover {
        color: ${props => props.red ? props.theme.paleRed : props.theme.lightGrayishBlue};
        fill: ${props => props.red ? props.theme.paleRed : props.theme.lightGrayishBlue};
    }
`

const ButtonList = styled.ul`
    display: flex;
    gap: 1.5rem;
    @media (max-width: 768px) {
        display: none;
    }
`

const ButtonListMobile = styled.ul`
    display: flex;
    gap: 1.5rem;
`

const Footer = styled.footer`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

function Comment(props) {
    return (
        <>
            <Container key={props.key}>
                {props.counter}
                <Content>
                    <Header>
                        <Profile>
                            <Image src={props.image} alt={props.username} />
                            <Heading>
                                {props.username}
                            </Heading>
                            <Tag>
                                you
                            </Tag>
                            <Paragraph>
                                {props.timestamp}
                            </Paragraph>
                        </Profile>
                        <ButtonList>
                            <li>
                                <Button red>
                                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" /></svg>
                                    Delete
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
                                    Edit
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" /></svg>
                                    Reply
                                </Button>
                            </li>
                        </ButtonList>
                    </Header>
                    <Paragraph>
                        {props.content}
                    </Paragraph>
                    <Footer>
                        {props.counterMobile}
                        <ButtonListMobile>
                            <li>
                                <Button red>
                                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" /></svg>
                                    Delete
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
                                    Edit
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" /></svg>
                                    Reply
                                </Button>
                            </li>
                        </ButtonListMobile>
                    </Footer>
                </Content>
            </Container>
            {props.replyTo}
        </>
    )
}

export default Comment
