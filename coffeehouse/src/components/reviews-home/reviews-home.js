import { StarFill } from 'react-bootstrap-icons';
import style from './reviews-home.css'

function ReviewsHome() {
    return(
        <div className='container py-5'>
            <div className="row align-items-center ">
                <div className="col-lg-4 d-flex justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center reviewsHome">
                        <h5>Tizio</h5>
                        <div className='flex-row'>
                            <StarFill size={20} className="mx-2"/>
                            <StarFill size={20} className="mx-2"/>
                            <StarFill size={20} className="mx-2"/>
                            <StarFill size={20} className="mx-2"/>
                            <StarFill size={20} className="mx-2"/>
                        </div>
                        <h4 className="pt-2">Perfect</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Arcu urna nulla neque nisl velit volutpat cursus. Felis tincidunt consectetur feugiat proin laoreet iaculis euismod senectus in....</p>   
                    </div>
                </div>
            
            <div className="col-lg-4 d-flex justify-content-center">
                    
                <div className="d-flex flex-column align-items-center justify-content-center reviewsHome">
                    
                    <h5>Tizio</h5>
                    <div className='flex-row'>
                        <StarFill size={20} className="mx-2"/>
                        <StarFill size={20} className="mx-2"/>
                        <StarFill size={20} className="mx-2"/>
                        <StarFill size={20} className="mx-2"/>
                        <StarFill size={20} className="mx-2"/>
                    </div>
                    <h4 className="pt-2">Perfect</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu urna nulla neque nisl velit volutpat cursus. Felis tincidunt consectetur feugiat proin laoreet iaculis euismod senectus in....</p>
                    
                    </div>
            </div>
            <div className="col-lg-4  d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center justify-content-center reviewsHome">
                    
                <div className="d-flex flex-column align-items-center justify-content-center reviewsHome">
                    
                    <h5>Tizio</h5>
                    <div className='flex-row'>
                        <StarFill size={20} className="mx-2"/>
                        <StarFill size={20} className="mx-2"/>
                        <StarFill size={20} className="mx-2"/>
                        <StarFill size={20} className="mx-2"/>
                        <StarFill size={20} className="mx-2"/>
                    </div>
                    <h4 className="pt-2">Perfect</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu urna nulla neque nisl velit volutpat cursus. Felis tincidunt consectetur feugiat proin laoreet iaculis euismod senectus in....</p>
                    
                    
                </div>
            </div>
            </div>
            </div>
        </div>)
}

export default ReviewsHome;