import styled from "styled-components"



const ProjectInfo = ({icon, text}) => {
    return <Wrapper>
        <span className="icon">{icon}</span>
        <span className="text">{text}</span>
    </Wrapper>
}


const Wrapper = styled.div`
margin-top: 0.5rem;
display: flex;
align-items: center;
.icon {
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    svg {
        color: #829ab1;
    }
}
.text {
    letter-spacing: 1px;
    color: gray;
}
`

export default ProjectInfo