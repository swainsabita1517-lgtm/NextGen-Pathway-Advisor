function QuestionCard({ question, value, onChange }) {
  return (
    <div className="card">
      <p>{question}</p>
      <input
        type="range"
        min="1"
        max="5"
        value={value}
        onChange={onChange}
      />
      <span>{value}</span>
    </div>
  );
}

export default QuestionCard;