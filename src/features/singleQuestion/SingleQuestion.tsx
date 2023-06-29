import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import { IQuestionsState } from '../questions/questionsSlice';
import styles from './singleQuestion.module.css';
import { toggle } from './singleQuestionSlice';

const SingleQuestion = ({ id, title, info }: IQuestionsState) => {
  const dispatch = useDispatch();
  const showInfo = useSelector((state: RootState) => state.singleQuestion.values[id]);

  const handleShowInfoClick = () => {
    dispatch(toggle(id));
  };

  return (
    <article className={styles.question}>
      <header>
        <h5>{title}</h5>
        <button className={styles.questionBtn} onClick={handleShowInfoClick}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
