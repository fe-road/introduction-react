// import styles from './title.module.css';
import './title.css';

interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
    return <h4 className='title'>{text}</h4>;
};

export default Title;
