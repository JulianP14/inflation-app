import Link from 'next/link'

import Inputs from './Inputs'
import Donations from './Donations'
import MainTitle from './MainTitle'
import HowWeDoIt from '@/app/funcionamiento/page'
import Footer from './Footer'

const Structure = () => {

    return (
        <>
            <div className='px-5 pt-10 '>
                <MainTitle />
                <Donations />
            </div>
            <Inputs />
            
            <Footer />
        </>
    )
}

export default Structure