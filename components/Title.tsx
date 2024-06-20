export { Title }

type TitleProps = {
  id: string
  title: string
  text: string
}

function Title({ id, title, text }: TitleProps) {
  return (
    <div className='text-center'>
      <h2 id={id} className='title-2'>
        {title}
      </h2>
      <p>{text}</p>
    </div>
  )
}
