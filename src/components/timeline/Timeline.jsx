import React from 'react'
import './timeline.css'

function Timeline() {
    return (
        <section className="experience " id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 experience">
                        <h2>My Work Experience Journey</h2>
                        <div className="timeline">
                            <div className="containertime right">
                                <div className="content">
                                    <h4>Sep 2022 - Present</h4>
                                    <h3>Software developer</h3>
                                    <div className='companyLink'>
                                        <a href='https://vfs.edu/' target='-blank'>Vancouver Film School</a>
                                    </div>
                                </div>
                            </div>
                            <div className="containertime left">
                                <div className="content">
                                    <h4>Jul 2021 - Feb 2022 </h4>
                                    <h3>Marketing Web Developer</h3>
                                    <div className='companyLink'>
                                        <a href='https://bekatec.ca//' target='-blank'>Bekatec</a>
                                    </div>
                                </div>
                            </div>
                            <div className="containertime right">
                                <div className="content">
                                    <h4>August 2021 - 2023</h4>
                                    <h3>Web Application Development, Diploma</h3>
                                    <div className='companyLink'>
                                        <a href='https://ciccc.ca/' target='-blank'>CICCC</a>
                                    </div>
                                </div>
                            </div>
                            <div className="containertime left">
                                <div className="content">
                                    <h4>July 2019 - Dec 2020</h4>
                                    <h3>Marketing Web Developer<small className='jobLevel'> - Entry-Level</small></h3>
                                    <div className='companyLink'>
                                        <a href='https://www.sheypoor.com/' target='-blank'>Sheypoor</a>
                                    </div>
                                </div>
                            </div>

                            <div className="containertime right">
                                <div className="content">
                                    <h4>August 2018 - June 2019</h4>
                                    <h3>Digital Marketing Specialist</h3>
                                    <div className='companyLink'>
                                        <a href='https://www.sheypoor.com/' target='-blank'>Sheypoor</a>
                                    </div>
                                </div>
                            </div>
                            <div className="containertime left">
                                <div className="content">
                                    <h4>May 2016 – Jul 2018</h4>
                                    <h3>Digital Marketing Specialist</h3>
                                    <div className='companyLink'>
                                        <a href='https://www.banimode.com/' target='-blank'>Banimode</a>
                                    </div>
                                </div>
                            </div>
                            <div className="containertime right">
                                <div className="content">
                                    <h4> Apr 2015 – May 2016</h4>
                                    <h3>Webmaster and Customer Support</h3>
                                    <div className='companyLink'>
                                        <a href='https://www.Boorsika.com/' target='-blank'>Boorsika</a>
                                    </div>
                                </div>
                            </div>
                            <div className="containertime left">
                                <div className="content">
                                    <h4>2008-2013</h4>
                                    <h3>Information Technology, Bachelor of Science</h3>
                                    <div className='companyLink'>
                                        <a href='http://en.pnu.ac.ir/portal/home/?1596402/PNU' target='-blank'>PNU</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Timeline

