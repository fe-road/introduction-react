import './header.css';

interface Props {
    text: string;
}

const Header = ({ text }: Props) => {
    return (
        <header>
            <h1 className='header'>{text}</h1>
        </header>
    );
}

export default Header;