import { Clock, Gift, Truck } from 'react-bootstrap-icons';
import style from './advantages-home.css';

function AdvantagesHome() {

    return (
        <div className='container py-5'>
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-3">
                    <div className="d-flex align-items-center justify-content-center py-3">
                        <Truck size={ 40 } className="icon-primary-color mx-2" /> Free shipping after 30€<span></span>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex align-items-center justify-content-center py-3">
                        <Clock size={ 40 } className="icon-primary-color mx-2" /> Processed in 2 days<span></span>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex align-items-center justify-content-center py-3">
                        <Gift size={ 40 } className="icon-primary-color mx-2" />Free samples<span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvantagesHome;