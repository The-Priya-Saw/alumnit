import './Footer.css';

const Footer = (props) => {
    return (
        <div className='Footer'>
            <div className='FooterDetails'>
                <h5>Bharati Vidyapeeth’s<br/>
                    College of Engineering
                </h5>
                <p>CBD, Belapur , Sector -7 , <br />Navi Mumbai Maharashtra,
                <br /> India – 400614.
                </p>
            </div>
            <div className='FooterContact'>
                <div>
                    <i class="bi bi-envelope-fill"></i>
                    <a href="">principal@bvcoenm.edu.in</a>
                </div>
                <div>
                <i class="bi bi-telephone-fill"></i>
                    <a href="">8657008030</a>
                </div>
            </div>
            <div className='FooterSocialLink'>
                <a href="https://www.facebook.com/bvcoenmedu/"><i class="bi bi-facebook"></i></a>
                <a href="https://twitter.com/BVCOE_Official"><i class="bi bi-twitter"></i></a>
                <a href="https://www.linkedin.com/school/bharati-vidyapeeth-college-of-engineering-navi-mumbai/"><i class="bi bi-instagram"></i></a>
                <a href="https://www.instagram.com/bvcoenm/"><i class="bi bi-linkedin"></i></a>
            </div>
        </div>
    );

}
export default Footer;