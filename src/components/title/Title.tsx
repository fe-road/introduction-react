interface Props {
    text: string;
}

const Title = ({ text }: Props) => {
    return (
        <h4>{text}</h4>
    );
}

export default Title;