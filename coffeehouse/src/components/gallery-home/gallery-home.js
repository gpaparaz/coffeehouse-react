import style from './gallery-home.css'

function GalleryHome() {
    return (
        <div>
            <div className='container'>
                <div className='row pt-5 align-items-center justify-content-center flex-row'>
                    <div className='boxGallery' id='box1'></div>

                    <div className='boxGallery' id='box2'></div>

                    <div className='boxGallery' id='box3'></div>

                    <div className='boxGallery' id='box4'></div>
                </div>

                <div className='row pb-5 align-items-center justify-content-center flex-row'>
                    <div className='boxGallery' id='box6'></div>

                    <div className='boxGallery' id='box7'></div>

                    <div className='boxGallery' id='box8'></div>

                    <div className='boxGallery' id='box9'></div>

                </div>
            </div>
        </div>
    )
}
export default GalleryHome;