import loader from '../../../assets/icons/spinner.png'

const Loader = () => {
  return (
    <div>
      <img src={loader} alt="loader" className="h-10 mx-auto animate-spin" />
    </div>
  )
}

export default Loader
