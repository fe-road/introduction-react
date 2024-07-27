interface Props {
    text: string;
}

const Header = ({ text }: Props) => {
    return (
        <header>
            <h1>{text}</h1>
        </header>
    );
}

export default Header;