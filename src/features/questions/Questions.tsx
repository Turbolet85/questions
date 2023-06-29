import { useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import SingleQuestion from '../singleQuestion/SingleQuestion';
import styles from './questions.module.css';

const Questions = () => {
  const questions = useSelector((state: RootState) => state.questions);
  return (
    <section className={styles.container}>
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion key={question.id} {...question} />
      ))}
    </section>
  );
};

export default Questions;
