import CommonHeading from '@/common/CommonHeading'
import React from 'react'

function Categorysection({ catagoryImages, styles }) {
    return (
        <section className={`${styles.aboutSection} bg-white text-black`}>
            <div className={styles.catagory_vl}></div>
            <div style={{ display: 'flex', flexDirection: "column", padding: '20px 90px' }}>
                <CommonHeading title={"Wide range of Colours"} subtitle={"Category"} lineImg={"assets/category_title_line.png"} alt={"category_title_line"} />
                <div className="row">
                    <div className="col-6 align-items-center ">
                        <img height={'85%'} width={'100%'} src={catagoryImages[0].img_url} alt="catagory1st_img" />
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', background: '#FF9119', alignItems: 'center', height: '13%' }}>
                            <h5>Interior Paints</h5>
                            <a href="#" className={`${styles.white_a_btn} btn rounded-5 py-2`}>
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="col-6 d-flex flex-wrap gap-3 ">
                        {catagoryImages.map((card, index) => {
                            if (index === 0) {
                                return
                            }
                            return (
                                <div key={index} className={styles.catagory_wraped_Box} >
                                    <img src={card.img_url} alt={card.title} />
                                    <span>{card.title}</span>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Categorysection