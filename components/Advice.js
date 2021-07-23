import { useSelector } from 'react-redux'

const Advice = () => {
  const advice = useSelector((state) => state.advice.advice)
  return <div className="advice">{advice}</div>
}

export default Advice
