export function Hero() {
    return (
        <>
            <div className='flex flex-row justify-center gap-2 items-center'>
                <div>
                    <img src='/Online-shopping-amico.svg' alt='shopping img' className='w-80'/>
                </div>
                <div className='flex border-1 border-black h-50 mx-4'></div>
                <div className='text-2xl lg:text-3xl'>
                    <p>Welcome to miniShop</p>
                    <p>A store using <span className='text-blue-500'>React</span></p>
                </div>
            </div>
        </>
    )
}