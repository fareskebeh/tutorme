import NotfoundIcon from "../../assets/not-found.png"

const NotFound = () => {
  return (
    <div className="pt-20 flex h-[100dvh] px-8 items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <img src={NotfoundIcon}/>
        <p className="text-2xl font-bold sm:text-3xl">Oops! This isn't the page you're looking for</p>
        <p className="text-xl sm:text-2xl text-neutral-700">Try using different keywords!</p>
      </div>
    </div>
  )
}

export default NotFound