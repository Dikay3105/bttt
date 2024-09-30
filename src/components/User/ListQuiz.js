import { useEffect, useState } from "react";
import { getQuizByUser } from "../../service/quizService";
import { useNavigate } from "react-router-dom";
import "./ListQuiz.scss"

const ListQuiz = () => {
    const [arrQuiz, setArrQuiz] = useState([]);
    const navigate = useNavigate();

    const getQuizData = async () => {
        const response = await getQuizByUser();
        if (response && response.EC === 0) {
            setArrQuiz(response.DT);
        }
    }

    useEffect(() => {
        getQuizData();
    }, []);

    return (
        <div className="List-Quiz-Container d-flex justify-content-center gap-5 px-5 text-center mt-5">
            {arrQuiz && arrQuiz.length > 0 ? (
                arrQuiz.map((quiz, index) => (
                    <div key={`${index}-quiz`} className="card" style={{ width: "18rem", height: "auto" }}>
                        <div className="card-img-top-container">
                            <img
                                className="card-img-top"
                                src={`data:image/jpeg;base64,${quiz.image}`}
                                alt={`${quiz.title} thumbnail`}
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{quiz.title}</h5>
                            <p className="card-text">{quiz.description}</p>
                            <button
                                onClick={() => navigate(`/quiz/${quiz.id}`, { state: { quizTitle: quiz.description } })}
                                className="btn btn-primary mt-auto"
                            >
                                Start now
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div>You don't have any quiz now</div>
            )}
        </div>



    );
}

export default ListQuiz;
