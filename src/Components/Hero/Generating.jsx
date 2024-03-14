import { loading } from "../../assets"

const Generating = ({className}) => {
  return (
    <div className={`bg-n-8/80 flex items-center rounded-3xl py-6 h-[2.3rem] text-base ${className || ""}`}>
        <img className="size-4 mx-4" src={loading} alt="" />
        AI is Generating
    </div>
  )
}

export default Generating