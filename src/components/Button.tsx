
type Props = {
  onClick: () => void
  text: string
}

const Button = ({ onClick, text }: Props) => {
  return (
    <button
      onClick={onClick}
      className=" my-5 font-rubik font-medium bg-primary-color-500 text-white block m-auto px-10 py-2 rounded-full capitalize hover:bg-primary-color-500/80 "
    >
      {text}
    </button>
  )
}

export default Button