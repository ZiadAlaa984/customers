


const Footer = () => {
    return (
        <div className='max-w-screen-2xl bg-white   mx-auto'>
            <div className="container mx-auto   px-6 ">
                <footer className='bg-white h-20 relative'>

                    <div className='border-t border-gray-200' />

                    <div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center'>
                        <div className='text-center md:text-left pb-2 md:pb-0'>
                            <p className='text-sm text-muted-foreground'>
                                &copy; {new Date().getFullYear()} All rights reserved to ziad alaa
                            </p>
                        </div>

                        <div className='flex items-center justify-center'>
                            <div className='flex space-x-8'>
                                <a
                                    href='#'
                                    className='text-sm text-muted-foreground hover:text-gray-600'>
                                    Terms
                                </a>
                                <a
                                    href='#'
                                    className='text-sm text-muted-foreground hover:text-gray-600'>
                                    Privacy Policy
                                </a>
                                <a
                                    href='#'
                                    className='text-sm text-muted-foreground hover:text-gray-600'>
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
    )
}

export default Footer
