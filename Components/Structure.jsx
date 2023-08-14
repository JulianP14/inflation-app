import Link from 'next/link'

import Inputs from './Inputs'
import Donations from './Donations'
import MainTitle from './MainTitle'
import HowWeDoIt from '@/app/how/page'

const Structure = () => {

    return (
        <>
            <div className='px-5 pt-10 '>
                <MainTitle />
                <Donations />
            </div>
            <Inputs />
            <Link href={'/how'}>
                <p>How we do it</p>
            </Link>
        </>
    )
}

export default Structure