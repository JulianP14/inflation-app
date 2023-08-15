import Inputs from './Inputs';
import Donations from './Donations';
import MainTitle from './MainTitle';
import Footer from './Footer';

const Structure = () => {

    return (
        <>
            <div className='flex flex-col px-4 pt-4'>
                <MainTitle />
                <Donations />
            </div>
            <Inputs />
            <Footer />
        </>
    )
};

export default Structure;