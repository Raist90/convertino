export { Title }

type TitleProps = {
  id: string
  title: string
  text: string
  textDirection?: 'left' | 'center' | 'right'
}

function Title({ id, title, text, textDirection = 'center' }: TitleProps) {
  const direction = {
    left: 'text-start',
    center: 'text-center',
    right: 'text-end',
  }

  return (
    <div className={direction[textDirection]}>
      <h2 id={id} className='title-2'>
        {title}
      </h2>
      <p>{text}</p>
    </div>
  )
}
