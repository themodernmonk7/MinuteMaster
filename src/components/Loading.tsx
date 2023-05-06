const Loading = () => {
  return (
    <>
      <section className=" h-screen grid place-items-center ">
        <div className=" flex space-x-4 ">
          <div className=" bg-primary-color-500 w-5 h-5 rounded-full transition-all animate-pulse "></div>
          <div className=" bg-[#28a745] w-5 h-5 rounded-full transition-all animate-pulse "></div>
          <div className=" bg-[#ffc107] w-5 h-5 rounded-full transition-all animate-pulse "></div>
        </div>
      </section>
    </>
  )
}

export default Loading
