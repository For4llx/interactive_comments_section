import styled from 'styled-components'

interface Props {
    alt: string,
    srcPrimary: string,
    srcDefault: string,
}

const Image = styled.img`
    width: 32px;
    height: 32px;
`
const CommentPicture: React.FC<Props> = (props) => {
    return (
        <picture>
            <source srcSet={props.srcPrimary} />
            <Image src={props.srcDefault} alt={props.alt} />
        </picture>
    )
}

export default CommentPicture