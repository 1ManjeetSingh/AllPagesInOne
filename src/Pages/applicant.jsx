import React, { useState, useRef, useEffect } from 'react'

import image1 from '../assets/image1.png';
import image2 from '../assets/Aspireit.png';
import image3 from '../assets/Ellipse 1872.svg';
import image4 from '../assets/Type=Layila.svg';
import image5 from '../assets/buttons-cta.svg';
import image6 from '../assets/Profile picture.png';
import image7 from '../assets/summarizeIcon.png';
import Rank from '../assets/Rank.svg';
import ProfileMatch from '../assets/Profile match.svg';

const CircularLoader = ({ progress }) => {
    const totalDots = 10;
    const fullDotsCount = Math.floor((progress / 100) * totalDots);
    const hasHalfDot = progress % 10 >= 5;

    const dots = Array.from({ length: totalDots }, (_, index) => {
        let dotStyle = {};

        if (index < fullDotsCount) {
            dotStyle = {
                background: "#0071db",
                boxShadow: "0px 0px 8px rgba(0, 113, 219, 0.4)",
            };
        } else if (index === fullDotsCount && hasHalfDot) {
            dotStyle = {
                background:
                    "linear-gradient(to top left, #004a9f, #0071db, rgba(0, 113, 219, 0.2), #d9d9d9)",
                boxShadow: "0px 0px 8px rgba(0, 113, 219, 0.3)",
            };
        } else {
            dotStyle = { background: "#d9d9d9" };
        }

        return dotStyle;
    });

    const getDotPosition = (index, radius = 45) => {
        const angle = ((2.5 - index) / 10) * 2 * Math.PI;
        return {
            left: `${Math.round(radius + radius * Math.cos(angle))}px`,
            top: `${Math.round( radius - radius * Math.sin(angle))}px`,
        };
    };

    return (
        <div className="relative flex justify-center items-center w-[108px] h-[108px]">
            <div className="text-center text-[#6f6f6f] text-lg font-bold font-['SF UI  Text'] leading-[18px] absolute">{progress}%</div>
            {dots.map((style, index) => (
                <div
                    key={index}
                    className="w-[18.06px] h-[18.06px] rounded-full absolute"
                    style={{
                        ...style,
                        ...getDotPosition(index, 45),
                    }}
                />
            ))}
        </div>
    );
};

const applicant = () => {

    // navbar variables
    const [searchPhrase, setSearchPhrase] = useState('');
    const [isFocused1, setisFocused1] = useState(false);
    const inputRef = useRef(null);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleSearch = (e) => {
        setSearchPhrase(e.target.value);
    };

    useEffect(() => {
        if (isFocused1 === false) {
            setSearchPhrase('');
        }
    }, [isFocused1]);

    // Ai summary variables
    const [isAiInterviewOpen,setAiInterviewOpen] =useState(false);
    const toogleAiInterview=()=>{
      return setAiInterviewOpen(!isAiInterviewOpen);
    }

    const [isAiTechnicalOpen,setAiTechnicalOpen] =useState(false);
    const toogleAiTechnical=()=>{
      return setAiTechnicalOpen(!isAiTechnicalOpen);
    }


    return (
        <div className='.main-container min-h-[100vh] bg-[#F1F4F8] pb-8'>

            {/*------- Navbar ----------- */}
            <div className="NavBar w-full mx-[auto] h-[8vh] min-h-[42px] px-8 bg-white border border-[#D2D2D2] backdrop-blur-[220px] flex justify-between items-center hover:cursor-pointer">
                <div className="logo-container w-[130px] h-[5vh] min-h-[24px] relative  bg-[#FFF]">
                    <div className="Rectangle7391 w-[9vw] h-[4.5vh] min-h-[24px] relative bg-[#0F0F36] rounded-[6px]" />
                    <div className="logo w-[9vw] h-[4vh] min-h-[24px] absolute left-[0px] top-[1px] bg-none flex justify-center items-center gap-[0.3vw]" >
                        <img className="Aspireit w-[1.5vw] bg-transparent shrink-0" src={image1} />
                        <img className="Group1000007770 bg-transparent w-[5vw] h-[2vh] shrink-0" src={image2} />
                    </div>
                </div>
                <div className="SearchBarContainer w-full flex grow justify-center items-center gap-4 bg-none">
                    <div className='InputContainer w-[55%] flex justify-start items-center gap-4 h-[5vh] min-h-[24px] pl-6 pr-6 bg-[#EBEBEB] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[32px]' >
                        <div className='searchBar inline-flex items-center h-[5vh] w-full bg-[#EBEBEB]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" className={`w-[3vh] h-[3vh] shrink-0 rounded-full mr-1 ${isFocused1 ? 'transform scale-110 transition-transform duration-300' : ''}`}   >
                                <path d="M9.49996 2.75C8.16495 2.75 6.85991 3.14588 5.74989 3.88757C4.63986 4.62927 3.7747 5.68347 3.26381 6.91686C2.75292 8.15026 2.61925 9.50745 2.8797 10.8168C3.14015 12.1262 3.78302 13.3289 4.72702 14.2729C5.67102 15.2169 6.87375 15.8598 8.18311 16.1202C9.49248 16.3807 10.8497 16.247 12.0831 15.7361C13.3165 15.2252 14.3707 14.3601 15.1124 13.25C15.854 12.14 16.2499 10.835 16.2499 9.49996C16.2498 7.70979 15.5386 5.99298 14.2728 4.72714C13.0069 3.46131 11.2901 2.75011 9.49996 2.75Z" stroke="#353535" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M14.666 14.668L18.3327 18.3346" stroke="#353535" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                            </svg>
                            <input
                                className='justify-start px-2 w-full max-w-[657px] text-[#353535] py-[0.5vh] text-[2vh] leading-[18px] border-0 bg-[#EBEBEB] focus:outline-none focus:text-[#353535]'
                                onClick={focusInput}
                                type="text" name='searchBar'
                                value={isFocused1 ? searchPhrase : ''}
                                onChange={handleSearch}
                                onFocus={() => setisFocused1(true)}
                                onBlur={() => setisFocused1(false)}
                                placeholder='Search'
                                ref={inputRef} />
                        </div>
                    </div>
                </div>

                <div className="Frame1000008205 flex justify-start items-center w-fit gap-[1vw] bg-none" >
                    <div className="Frame1000008204 px-[2vh] py-[2px] bg-[#EBEBEB] flex justify-start items-center shadow-[0px_0px_6px_rgba(0,_0,_0,_0.25)] rounded-[40px] backdrop-blur-[4px]">
                        <div className="ButtonsNotification w-[5vh] min-w-[24px] h-[5vh] min-h-[24px] mr-[1.5vh] relative bg-[#EBEBEB]" >
                            <div className="Ellipse w-[5vh] h-[5vh] min-w-[24px] min-h-[24px] absolute left-0 top-0 bg-white rounded-full" />
                            <div className="IconsBell w-[4vh] h-[4vh] min-w-[18px] min-h-[18px] absolute left-[1vh] top-[1vh] bg-none hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className='w-[3vh] h-[3vh] min-w-[16px] min-h-[16px]'>
                                    <path d="M21 6.50001C21 8.43001 19.43 10 17.5 10C15.57 10 14 8.43001 14 6.50001C14 4.57001 15.57 3.00001 17.5 3.00001C19.43 3.00001 21 4.57001 21 6.50001ZM19 11.79C18.5 11.92 18 12 17.5 12C16.0421 11.9974 14.6447 11.4171 13.6138 10.3862C12.583 9.3553 12.0026 7.95788 12 6.50001C12 5.03001 12.58 3.70001 13.5 2.71001C13.3185 2.48755 13.0897 2.30838 12.8302 2.18555C12.5707 2.06272 12.2871 1.99934 12 2.00001C10.9 2.00001 10 2.90001 10 4.00001V4.29001C7.03 5.17001 5 7.90001 5 11V17L3 19V20H21V19L19 17V11.79ZM12 23C13.11 23 14 22.11 14 21H10C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23Z" fill="#0072DC" />
                                </svg>
                            </div>
                        </div>
                        <div className="Profile flex justify-end items-center bg-[#EBEBEB] hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300" >
                            <img className="AvatarPic w-[5vh] min-w-[24px] bg-none rounded-full" src={image3} />
                        </div>
                    </div>
                    <div className="Ai w-[4.5vw] min-w-[42px] bg-none" >
                        <img className="Layila h-[7.5vh] bg-none rounded-full hover:transform hover:scale-[1.08] hover:transition-transform hover:duration-300" src={image4} />
                    </div>
                </div>
            </div>

            {/*------- Profile Card --------- */}
            <div className='flex flex-col pt-6 px-[6vw]'>
                <div className="HeaderApplicantResults w-[full] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="Profile self-stretch py-6 px-8 bg-white rounded-3xl shadow">
                        <div className='gap-6 justify-start items-center inline-flex'>
                            <img className="ProfilePicture w-[88px] h-[88px] rounded-full" src={image6} />
                            <div className="Heading grow shrink basis-0 self-stretch flex-col justify-center items-start gap-4 inline-flex">
                                <div className="Text self-stretch text-[#1e1e1e] text-3xl font-semibold font-['SF UI  Text']">Aryan Sharma</div>
                                <div className="text-[#6f6f6f] text-xl font-normal font-['SF UI  Text'] leading-none pl-1">OTM Architect</div>
                                <div className='flex w-full justify-between items-center'>
                                    <div className="ButtonsCta max-w-[140px] h-[5vh] rounded-[30px] justify-start items-center inline-flex hover:cursor-pointer mt-[1vh]" style={{ background: 'white' }}>
                                        <svg width="144" height="48" viewBox="0 0 144 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_185_1808)">
                                                <rect x="4.75" y="4.75" width="134.5" height="38.5" rx="19.25" stroke="url(#paint0_linear_185_1808)" strokeWidth="1.5" shapeRendering="crispEdges" />
                                                <path d="M28.2642 20.2737C28.3845 19.9486 28.8443 19.9486 28.9646 20.2737L29.9827 23.0249C30.0961 23.3315 30.3379 23.5733 30.6445 23.6867L33.3957 24.7048C33.7208 24.8251 33.7208 25.2849 33.3957 25.4052L30.6445 26.4232C30.3379 26.5367 30.0961 26.7784 29.9827 27.0851L28.9646 29.8363C28.8443 30.1614 28.3845 30.1613 28.2642 29.8362L27.2462 27.0851C27.1327 26.7784 26.891 26.5367 26.5843 26.4232L23.8331 25.4052C23.508 25.2849 23.508 24.8251 23.8331 24.7048L26.5843 23.6867C26.891 23.5733 27.1327 23.3315 27.2462 23.0249L28.2642 20.2737Z" fill="url(#paint1_linear_185_1808)" />
                                                <path d="M32.9913 26.075C33.0514 25.9125 33.2813 25.9125 33.3415 26.075L33.5418 26.6162C33.5607 26.6674 33.601 26.7076 33.6521 26.7266L34.1933 26.9268C34.3559 26.987 34.3559 27.2169 34.1933 27.277L33.6521 27.4773C33.601 27.4962 33.5607 27.5365 33.5418 27.5876L33.3415 28.1289C33.2813 28.2914 33.0514 28.2914 32.9913 28.1289L32.791 27.5876C32.7721 27.5365 32.7318 27.4962 32.6807 27.4773L32.1395 27.277C31.9769 27.2169 31.9769 26.987 32.1395 26.9268L32.6807 26.7266C32.7318 26.7076 32.7721 26.6674 32.791 26.6162L32.9913 26.075Z" fill="url(#paint2_linear_185_1808)" />
                                                <path d="M24.8352 17.613C24.9555 17.2879 25.4153 17.2879 25.5356 17.613L25.9329 18.6868C25.9707 18.789 26.0513 18.8696 26.1535 18.9074L27.2273 19.3048C27.5524 19.4251 27.5524 19.8849 27.2273 20.0052L26.1535 20.4025C26.0513 20.4404 25.9707 20.5209 25.9329 20.6232L25.5356 21.6969C25.4153 22.022 24.9555 22.022 24.8352 21.6969L24.4378 20.6232C24.4 20.5209 24.3194 20.4404 24.2172 20.4025L23.1434 20.0052C22.8183 19.8849 22.8183 19.4251 23.1434 19.3048L24.2172 18.9074C24.3194 18.8696 24.4 18.789 24.4378 18.6868L24.8352 17.613Z" fill="url(#paint3_linear_185_1808)" />
                                                <path d="M31.6602 19.157L32.0416 20.1878C32.0984 20.3411 32.2193 20.462 32.3726 20.5187L33.4034 20.9002L32.3726 21.2816C32.2193 21.3384 32.0984 21.4593 32.0416 21.6126L31.6602 22.6434L31.2788 21.6126C31.222 21.4593 31.1011 21.3384 30.9478 21.2816L29.917 20.9002L30.9478 20.5187C31.1011 20.462 31.222 20.3411 31.2788 20.1878L31.6602 19.157Z" fill="url(#paint4_linear_185_1808)" />
                                                <path d="M25.1884 27.2838C25.3198 27.1708 25.5209 27.2822 25.4947 27.4536L25.3563 28.3597C25.3481 28.4135 25.3638 28.4683 25.3993 28.5096L25.9971 29.2045C26.1101 29.3359 25.9987 29.537 25.8273 29.5109L24.9212 29.3724C24.8674 29.3642 24.8126 29.3799 24.7713 29.4155L24.0764 30.0132C23.945 30.1262 23.7439 30.0148 23.77 29.8435L23.9085 28.9374C23.9167 28.8835 23.901 28.8287 23.8654 28.7874L23.2677 28.0925C23.1547 27.9611 23.2661 27.76 23.4374 27.7862L24.3436 27.9246C24.3974 27.9328 24.4522 27.9171 24.4935 27.8816L25.1884 27.2838Z" fill="url(#paint5_linear_185_1808)" />
                                                <path d="M47.9639 29L47.1299 26.4775H43.5L42.6523 29H40.8682L44.3682 19.1357H46.3506L49.8574 29H47.9639ZM45.2637 21.0156L43.9102 25.083H46.7197L45.3799 21.0156H45.2637ZM53.3164 29H51.5527V19.1357H53.3164V29ZM59.0312 26.3203H60.7539C60.8633 27.2021 61.7383 27.7695 62.9893 27.7695C64.1514 27.7695 64.9922 27.1748 64.9922 26.3477C64.9922 25.6367 64.4521 25.2197 63.1875 24.9258L61.9092 24.6318C60.1182 24.2285 59.2773 23.3398 59.2773 21.8701C59.2773 20.0791 60.7402 18.8896 62.9482 18.8896C65.0195 18.8896 66.5166 20.0791 66.5986 21.7744H64.9102C64.7871 20.9062 64.0215 20.3594 62.9414 20.3594C61.8066 20.3594 61.0547 20.9062 61.0547 21.7471C61.0547 22.4102 61.5537 22.7998 62.7773 23.0801L63.9121 23.3398C65.915 23.791 66.7559 24.625 66.7559 26.1289C66.7559 28.0498 65.2725 29.2461 62.8799 29.2461C60.6172 29.2461 59.1201 28.1113 59.0312 26.3203ZM75.2256 21.5215V29H73.5918V27.8105H73.4756C73.1133 28.665 72.2656 29.1504 71.1582 29.1504C69.5107 29.1504 68.4922 28.1318 68.4922 26.3613V21.5215H70.1875V25.958C70.1875 27.1064 70.7275 27.6602 71.7461 27.6602C72.8398 27.6602 73.5303 26.9834 73.5303 25.876V21.5215H75.2256ZM77.3105 29V21.5215H78.9443V22.7314H79.0605C79.3818 21.877 80.1475 21.3711 81.1387 21.3711C82.1709 21.3711 82.8887 21.8906 83.2031 22.7314H83.3193C83.6885 21.9111 84.5498 21.3711 85.5889 21.3711C87.0859 21.3711 87.9883 22.3076 87.9883 23.8594V29H86.2998V24.29C86.2998 23.3262 85.8418 22.8477 84.9326 22.8477C84.0508 22.8477 83.4697 23.4902 83.4697 24.3447V29H81.8223V24.167C81.8223 23.3467 81.3027 22.8477 80.4688 22.8477C79.6279 22.8477 79.0059 23.5381 79.0059 24.4541V29H77.3105ZM89.998 29V21.5215H91.6318V22.7314H91.748C92.0693 21.877 92.835 21.3711 93.8262 21.3711C94.8584 21.3711 95.5762 21.8906 95.8906 22.7314H96.0068C96.376 21.9111 97.2373 21.3711 98.2764 21.3711C99.7734 21.3711 100.676 22.3076 100.676 23.8594V29H98.9873V24.29C98.9873 23.3262 98.5293 22.8477 97.6201 22.8477C96.7383 22.8477 96.1572 23.4902 96.1572 24.3447V29H94.5098V24.167C94.5098 23.3467 93.9902 22.8477 93.1562 22.8477C92.3154 22.8477 91.6934 23.5381 91.6934 24.4541V29H89.998ZM105.242 27.79C106.268 27.79 107.033 27.127 107.033 26.2588V25.6641L105.345 25.7734C104.395 25.835 103.95 26.1768 103.95 26.7852C103.95 27.4141 104.49 27.79 105.242 27.79ZM104.743 29.123C103.301 29.123 102.269 28.248 102.269 26.8809C102.269 25.5273 103.287 24.748 105.105 24.6387L107.033 24.5225V23.8936C107.033 23.1621 106.541 22.752 105.625 22.752C104.846 22.752 104.312 23.0254 104.155 23.5312H102.556C102.692 22.2119 103.93 21.3711 105.707 21.3711C107.628 21.3711 108.708 22.3076 108.708 23.8936V29H107.074V27.9746H106.958C106.541 28.6992 105.721 29.123 104.743 29.123ZM110.752 29V21.5215H112.386V22.6836H112.502C112.707 21.9453 113.507 21.3984 114.464 21.3984C114.703 21.3984 114.997 21.4258 115.161 21.4736V23.0459C115.031 22.998 114.566 22.9502 114.3 22.9502C113.213 22.9502 112.447 23.6338 112.447 24.6797V29H110.752ZM117.383 31.7207C117.28 31.7207 116.822 31.7139 116.713 31.6934V30.3125C116.809 30.3262 117.062 30.333 117.178 30.333C117.896 30.333 118.299 30.0527 118.518 29.3623L118.606 29.0342L115.934 21.5215H117.793L119.543 27.3594H119.659L121.402 21.5215H123.193L120.493 29.2393C119.857 31.0986 119.058 31.7207 117.383 31.7207Z" fill="url(#paint6_linear_185_1808)" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_185_1808" x="0" y="0" width="144" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_185_1808" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_185_1808" result="shape" />
                                                </filter>
                                                <linearGradient id="paint0_linear_185_1808" x1="12.7931" y1="11.2727" x2="33.7644" y2="73.3439" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.0722182" stopColor="#002DBF" />
                                                    <stop offset="0.460933" stopColor="#4396F7" />
                                                    <stop offset="0.712967" stopColor="#FF9BD2" />
                                                    <stop offset="0.967315" stopColor="#C9FFFC" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_185_1808" x1="35.7996" y1="34.6014" x2="23.3837" y2="18.8597" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.340919" stopColor="#002DBF" />
                                                    <stop offset="0.479627" stopColor="#4396F7" />
                                                    <stop offset="0.634404" stopColor="#FF9BD2" />
                                                    <stop offset="0.815235" stopColor="#C9FFFC" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_185_1808" x1="32.3863" y1="26.4475" x2="34.6665" y2="29.9278" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#D388FF" />
                                                    <stop offset="0.695" stopColor="#4B94F7" />
                                                </linearGradient>
                                                <linearGradient id="paint3_linear_185_1808" x1="27.4148" y1="22.6434" x2="20.2143" y2="14.5036" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.0189477" stopColor="#89B5FF" />
                                                    <stop offset="0.745" stopColor="#002886" />
                                                </linearGradient>
                                                <linearGradient id="paint4_linear_185_1808" x1="32.9607" y1="22.6434" x2="28.7604" y2="17.8952" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="white" />
                                                    <stop offset="0.315" stopColor="#FF8CB6" />
                                                </linearGradient>
                                                <linearGradient id="paint5_linear_185_1808" x1="24.9574" y1="31.0425" x2="23.4327" y2="24.1676" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF5FD7" />
                                                    <stop offset="0.545" stopColor="#C86AFF" />
                                                </linearGradient>
                                                <linearGradient id="paint6_linear_185_1808" x1="40" y1="19.3333" x2="46.2934" y2="46.6012" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.0722182" stopColor="#002DBF" />
                                                    <stop offset="0.460933" stopColor="#4396F7" />
                                                    <stop offset="0.712967" stopColor="#FF9BD2" />
                                                    <stop offset="0.967315" stopColor="#C9FFFC" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between pt-[3vh] gap-6'>
                                <div className="h-[154px] px-7 py-2 rounded-3xl flex-col justify-start items-start gap-1 inline-flex">
                                    <div className="self-stretch px-1 justify-start items-center gap-2 inline-flex">
                                        <div className="grow shrink basis-0 text-[#282828] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">About</div>
                                    </div>
                                    <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div className="py-1 justify-start items-center gap-4 flex">
                                                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 23V9.70046C3 9.27995 3.26307 8.90437 3.65826 8.76067L13.3291 5.24398C13.5886 5.14961 13.8755 5.28349 13.9699 5.54301C13.9898 5.59778 14 5.65561 14 5.71388V10.6667L20.3162 12.7721C20.7246 12.9082 21 13.2904 21 13.7208V23H22C22.5523 23 23 23.4477 23 24V24C23 24.5523 22.5523 25 22 25H2C1.44772 25 1 24.5523 1 24V24C1 23.4477 1.44772 23 2 23H3ZM5 23H12V7.85543L5 10.4009V23ZM19 23V14.4416L14 12.7749V23H19Z" fill="#0072DC" />
                                                </svg>

                                                <span className="text-[#6f6f6f] text-lg font-normal font-['SF UI  Text'] leading-none inline-flex"><span>Company&nbsp;</span><span>:</span></span>
                                            </div>
                                            <div className="grow shrink basis-0 text-[#1e1e1e] text-lg font-normal font-['SF UI  Text'] leading-none">TCS</div>
                                        </div>
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div className="py-1 justify-start items-center gap-4 flex">
                                                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 23V9.70046C3 9.27995 3.26307 8.90437 3.65826 8.76067L13.3291 5.24398C13.5886 5.14961 13.8755 5.28349 13.9699 5.54301C13.9898 5.59778 14 5.65561 14 5.71388V10.6667L20.3162 12.7721C20.7246 12.9082 21 13.2904 21 13.7208V23H22C22.5523 23 23 23.4477 23 24V24C23 24.5523 22.5523 25 22 25H2C1.44772 25 1 24.5523 1 24V24C1 23.4477 1.44772 23 2 23H3ZM5 23H12V7.85543L5 10.4009V23ZM19 23V14.4416L14 12.7749V23H19Z" fill="#0072DC" />
                                                </svg>

                                                <div className="text-[#6f6f6f] text-lg font-normal font-['SF UI Text'] leading-none inline-flex"><span>Experience&nbsp;</span><span>:</span></div>
                                            </div>
                                            <div className="grow shrink basis-0 text-[#1e1e1e] text-lg font-normal font-['SF UI  Text'] leading-none">5 years</div>
                                        </div>
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div className="py-1 justify-start items-center gap-4 flex">
                                                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 8H4V6H20V8H18V10C18 11.6154 17.1838 12.9147 16.1561 13.9767C15.4532 14.703 14.598 15.372 13.7309 16C14.598 16.628 15.4532 17.297 16.1561 18.0233C17.1838 19.0853 18 20.3846 18 22V24H20V26H4V24H6V22C6 20.3846 6.81616 19.0853 7.8439 18.0233C8.54682 17.297 9.40202 16.628 10.2691 16C9.40202 15.372 8.54682 14.703 7.8439 13.9767C6.81616 12.9147 6 11.6154 6 10V8ZM8 8V10C8 10.8846 8.43384 11.7103 9.2811 12.5858C10.008 13.337 10.9548 14.0398 12 14.7781C13.0452 14.0398 13.992 13.337 14.7189 12.5858C15.5662 11.7103 16 10.8846 16 10V8H8ZM12 17.2219C10.9548 17.9602 10.008 18.663 9.2811 19.4142C8.43384 20.2897 8 21.1154 8 22V24H16V22C16 21.1154 15.5662 20.2897 14.7189 19.4142C13.992 18.663 13.0452 17.9602 12 17.2219Z" fill="#0072DC" />
                                                </svg>

                                                <div className="text-[#6f6f6f] text-lg font-normal font-['SF UI  Text'] leading-none inline-flex"><span>Location&nbsp;</span><span>:</span></div>
                                            </div>
                                            <div className="grow shrink basis-0 text-[#1e1e1e] text-lg font-normal font-['SF UI  Text'] leading-none">Kolkata </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-7 py-2 rounded-3xl flex-col justify-start items-start gap-4 inline-flex">
                                    <div className="self-stretch px-1 justify-start items-center gap-2 inline-flex">
                                        <div className="grow shrink basis-0 text-[#282828] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">Skills</div>
                                    </div>
                                    <div className="self-stretch justify-start items-start gap-2 flex flex-wrap">
                                        <div className="px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 flex">
                                            <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">User Research</div>
                                        </div>
                                        <div className="px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 flex">
                                            <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Framer</div>
                                        </div>
                                        <div className="px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 flex">
                                            <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Canva</div>
                                        </div>
                                        <div className="px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 flex">
                                            <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Figma</div>
                                        </div>
                                        <div className="px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 flex">
                                            <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Photoshop</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-end'>
                                    <div className="ButtonsCta h-[5vh] px-9 bg-[#0071db] rounded-[30px] shadow justify-center max-w-[235px] items-center gap-2 inline-flex cursor-pointer">
                                        <div className="ButtonLabel text-center inline-flex"><span className="text-white text-[18px] font-['SF UI  Text'] leading-[18px]">Finalize&nbsp;</span><span className="text-white text-[18px] font-['SF UI  Text'] leading-[18px]">Candidate</span></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* score card */}
            <div className='flex mt-[4vh] justify-between px-[6vw] gap-[2vw] '>
                <div className="w-[30%] h-[330px] px-7 py-8 bg-white rounded-3xl shadow-[0px_0px_24px_0px_rgba(211,136,255,0.45)] flex-col justify-center items-center gap-9 inline-flex">
                    <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['SF UI  Text'] leading-normal">Cummulative Score</div>
                    <div className="self-stretch grow basis-0 flex-col justify-center items-center flex">
                        <div className="justify-start items-start inline-flex">
                            <div className="text-center text-[#24df3a] text-[40px] font-semibold font-['SF UI Display'] leading-[48px]">86%</div>
                        </div>
                    </div>
                </div>
                <div className="w-[31%] h-[330px] px-7 py-8 bg-white rounded-3xl shadow-[0px_0px_24px_0px_rgba(211,136,255,0.45)] flex-col justify-center items-center gap-3 inline-flex">
                    <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['SF UI  Text'] leading-normal">Rank</div>
                    <div className="justify-start items-start gap-5 inline-flex">
                        <div className="px-2 py-1 justify-center items-center gap-9 flex">
                            <div className="flex-col justify-start items-center gap-6 inline-flex">
                                <div className="flex-col justify-start items-center gap-1 flex">
                                    <img className="w-[130px] h-[130px] relative" src={Rank} />
                                    <div className="justify-center items-end gap-0.5 inline-flex">
                                        <div className="text-center text-[#0f0f36] text-[28px] font-semibold font-['SF UI Display'] leading-7">12</div>
                                        <div className="text-center text-[#0f0f36] text-[28px] font-semibold font-['SF UI Display'] leading-7">th</div>
                                    </div>
                                </div>
                                <div className="text-center text-[#6f6f6f] text-lg font-normal font-['SF UI  Text'] leading-[18px]">AI Interview</div>
                            </div>
                        </div>
                        <div className="px-2 py-1 justify-center items-center gap-9 flex">
                            <div className="flex-col justify-start items-center gap-6 inline-flex">
                                <div className="flex-col justify-start items-center gap-1 flex">
                                    <img className="w-[130px] h-[130px] relative" src={Rank} />
                                    <div className="justify-center items-end gap-0.5 inline-flex">
                                        <div className="text-center text-[#0f0f36] text-[28px] font-semibold font-['SF UI Display'] leading-7">9</div>
                                        <div className="text-center text-[#0f0f36] text-[28px] font-semibold font-['SF UI Display'] leading-7">th</div>
                                    </div>
                                </div>
                                <div className="text-center text-[#6f6f6f] text-lg font-normal font-['SF UI  Text'] leading-[18px]">AI Technical</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[28%] h-[330px] px-10 py-7 bg-white rounded-3xl shadow-[0px_0px_24px_0px_rgba(211,136,255,0.45)] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch h-12 flex-col justify-start items-center gap-2 flex">
                        <div className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['SF UI  Text'] leading-normal">Profile Match</div>
                        <div className="text-center text-[#6f6f6f] text-lg font-normal font-['SF UI  Text'] leading-none">with job opening</div>
                    </div>
                    <div className="flex-col justify-start items-center gap-1.5 flex">
                        <img className="w-[146px] h-[146px] relative" src={ProfileMatch} />
                        <div className="text-center text-[#0f0f36] text-[32px] font-semibold font-['SF UI Display'] leading-loose" style={{ textShadow: '0px 0px 12px rgba(15,15,54,0.45)' }}>68%</div>
                    </div>
                </div>
            </div>

            {/* AI Interview */}
            <div className='flex flex-col self-stretch py-[4vh] px-[8vh] mt-[4vh] mx-[6vw] gap-[4vh] bg-white rounded-3xl shadow'>
                <div className='flex flex-col gap-[1vh]'>
                    <div className="text-[#1e1e1e] text-xl font-normal font-['SF UI  Text'] uppercase leading-none tracking-wide">Round 1</div>
                    <div className="text-[#1e1e1e] text-2xl font-semibold font-['SF UI  Text'] leading-normal">AI Interview</div>
                </div>
                <div className='flex gap-[4vh] justify-around'>
                    <div className='w-[25%] flex flex-col gap-[2vh]'>
                        <div className='flex items-center'>
                            <CircularLoader progress={65} />
                        </div>
                        <img className='w-[116px] h-auto -ml-1' src={image7} alt="" onClick={toogleAiInterview}/>
                    </div>
                    <div className='w-[40%] flex flex-col gap-[5vh]'>
                        <div className='flex flex-col gap-[1vh]'>
                            <div className="text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">Strenghs</div>
                            <div className='flex flex-wrap gap-2'>
                                <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                                    <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Communication</div>
                                </div>
                                <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                                    <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Visual Design</div>
                                </div>
                                <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                                    <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Adaptive</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[1vh]'>
                            <div className="text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">Weaknesses</div>
                            <div className='flex flex-wrap gap-2'>
                                <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                                    <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Public Speaking</div>
                                </div>
                                <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                                    <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Perfectionism</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[20%] flex flex-col gap-[1vh]'>
                        <div className="text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">Role Fit</div>
                        <div className='flex flex-wrap gap-2 h-full'>
                            <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_#D388FF] border border-[#EA63E7] justify-start items-center gap-2 inline-flex">
                                <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Senior</div>
                            </div>
                        </div>
                        <div className='flex justify-end items-end'>
                            <div className="h-10 px-4 rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0071db] justify-center items-center gap-1 inline-flex">
                                <div className="text-center text-[#0071db] text-lg font-semibold font-['SF UI  Text'] leading-[14px]">View more</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`px-8 py-5 rounded-xl flex-col justify-center items-start gap-4 inline-flex transition-all duration-500 ease-in-out ${isAiInterviewOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`} style={{ background: 'linear-gradient(135deg, rgba(0, 45, 191, 0.30) -1.89%, rgba(67, 150, 247, 0.24) 45.88%, rgba(255, 155, 210, 0.42) 76.85%, rgba(201, 255, 252, 0.42) 108.11%)' }}>
                    <div className="justify-start items-center gap-1 inline-flex">
                        <div className="w-6 h-6 pl-[3px] pr-0.5 pt-px pb-[1.08px] justify-center items-center flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
                                <path d="M9.39632 5.41157C9.57676 4.92392 10.2665 4.92392 10.4469 5.41157L11.974 9.53835C12.1442 9.9983 12.5068 10.3609 12.9668 10.5311L17.0935 12.0582C17.5812 12.2386 17.5812 12.9284 17.0935 13.1088L12.9668 14.6358C12.5068 14.806 12.1442 15.1687 11.974 15.6286L10.4469 19.7554C10.2665 20.2431 9.57676 20.2431 9.39632 19.7554L7.86927 15.6286C7.69907 15.1687 7.33643 14.806 6.87649 14.6358L2.7497 13.1088C2.26205 12.9284 2.26205 12.2386 2.7497 12.0582L6.87649 10.5311C7.33643 10.3609 7.69907 9.9983 7.86927 9.53835L9.39632 5.41157Z" fill="#323232" />
                                <path d="M16.4871 14.1136C16.5773 13.8698 16.9221 13.8698 17.0124 14.1136L17.3128 14.9255C17.3411 15.0021 17.4016 15.0626 17.4782 15.0909L18.2901 15.3913C18.5339 15.4816 18.5339 15.8264 18.2901 15.9167L17.4782 16.2171C17.4016 16.2454 17.3411 16.3059 17.3128 16.3825L17.0124 17.1944C16.9221 17.4382 16.5773 17.4382 16.4871 17.1944L16.1866 16.3825C16.1583 16.3059 16.0978 16.2454 16.0212 16.2171L15.2093 15.9167C14.9655 15.8264 14.9655 15.4816 15.2093 15.3913L16.0212 15.0909C16.0978 15.0626 16.1583 15.0021 16.1866 14.9255L16.4871 14.1136Z" fill="#323232" />
                                <path d="M4.25314 1.4206C4.43358 0.932952 5.12331 0.932953 5.30375 1.4206L5.89976 3.03128C5.95649 3.1846 6.07737 3.30548 6.23069 3.36221L7.84137 3.95821C8.32902 4.13866 8.32901 4.82839 7.84136 5.00883L6.23069 5.60484C6.07737 5.66157 5.95649 5.78245 5.89976 5.93576L5.30375 7.54644C5.12331 8.03409 4.43358 8.03409 4.25314 7.54644L3.65713 5.93576C3.6004 5.78245 3.47952 5.66157 3.3262 5.60484L1.71552 5.00883C1.22787 4.82838 1.22788 4.13866 1.71553 3.95821L3.3262 3.36221C3.47952 3.30548 3.6004 3.1846 3.65713 3.03128L4.25314 1.4206Z" fill="#323232" />
                                <path d="M14.4903 3.73633L15.0625 5.28259C15.1476 5.51256 15.3289 5.69388 15.5589 5.77898L17.1051 6.35115L15.5589 6.92331C15.3289 7.00841 15.1476 7.18973 15.0625 7.41971L14.4903 8.96597L13.9181 7.41971C13.833 7.18973 13.6517 7.00841 13.4217 6.92331L11.8755 6.35115L13.4217 5.77898C13.6517 5.69388 13.833 5.51256 13.9181 5.28259L14.4903 3.73633Z" fill="#323232" />
                                <path d="M4.78226 15.9268C4.97935 15.7572 5.281 15.9244 5.24174 16.1814L5.0341 17.5406C5.02175 17.6214 5.04533 17.7035 5.09863 17.7655L5.99526 18.8079C6.1648 19.0049 5.99765 19.3066 5.74065 19.2673L4.38147 19.0597C4.30067 19.0473 4.21851 19.0709 4.15655 19.1242L3.11418 20.0209C2.91708 20.1904 2.61544 20.0232 2.6547 19.7662L2.86234 18.4071C2.87468 18.3263 2.85111 18.2441 2.79781 18.1821L1.90117 17.1398C1.73163 16.9427 1.89878 16.641 2.15578 16.6803L3.51496 16.8879C3.59576 16.9003 3.67792 16.8767 3.73989 16.8234L4.78226 15.9268Z" fill="#323232" />
                            </svg>
                        </div>
                        <div className={`flex justify-start items-center gap-2`}>
                            <div className="text-center text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">AI Summary</div>
                        </div>
                    </div>
                    <div className="self-stretch text-justify text-black text-lg font-normal font-['SF UI  Text'] leading-tight">The candidate achieved an overall score of 65% in the AI interview. Key strengths include effective communication, strong problem-solving abilities, quick adaptability, analytical thinking, and teamwork. However, the candidate demonstrated weaknesses in leadership experience, time management, technical expertise, and reliance on structured processes. Overall, the candidate is highly suitable for collaborative and problem-solving roles but may need upskilling to excel in leadership positions. For more details, click "View More".</div>
                </div>
            </div>

            {/* AI Technical */}
            <div className='flex flex-col self-stretch py-[4vh] px-[8vh] mt-[4vh] mx-[6vw] gap-[4vh] bg-white rounded-3xl shadow'>
                <div className='flex flex-col gap-[1vh]'>
                    <div className="text-[#1e1e1e] text-xl font-normal font-['SF UI  Text'] uppercase leading-none tracking-wide">Round 2</div>
                    <div className="text-[#1e1e1e] text-2xl font-semibold font-['SF UI  Text'] leading-normal">AI Technical</div>
                </div>
                <div className='flex gap-[4vh] justify-around'>
                    <div className='w-[25%] flex flex-col gap-[2vh]'>
                        <div className='flex items-center'>
                        <CircularLoader progress={75} />
                        </div>
                        <img className='w-[116px] h-auto -ml-1' src={image7} alt="" onClick={toogleAiTechnical}/>

                    </div>
                    <div className='w-[40%] flex flex-col gap-[5vh]'>
                        <div className='flex flex-col gap-[1vh]'>
                            <div className="text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">Strenghs</div>
                            <div className='flex flex-wrap gap-2'>
                                <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                                    <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Communication</div>
                                </div>
                                <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                                    <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Visual Design</div>
                                </div>
                                <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                                    <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Adaptive</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[1vh]'>
                            <div className="text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">Weaknesses</div>
                            <div className='flex flex-wrap gap-2'>
                                <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                                    <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Public Speaking</div>
                                </div>
                                <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0072dc] justify-start items-center gap-2 inline-flex">
                                    <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Perfectionism</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[20%] flex flex-col gap-[1vh]'>
                        <div className="text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">Role Fit</div>
                        <div className='flex flex-wrap gap-2 h-full'>
                            <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_#D388FF] border border-[#EA63E7] justify-start items-center gap-2 inline-flex">
                                <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Senior</div>
                            </div>
                            <div className="h-8 w-fit px-3 py-2 bg-neutral-100 rounded shadow-[0px_0px_4px_0px_#D388FF] border border-[#EA63E7] justify-start items-center gap-2 inline-flex">
                                <div className="text-black text-lg font-normal font-['SF UI  Text'] leading-none">Mid-level</div>
                            </div>
                        </div>
                        <div className='flex justify-end items-end'>
                            <div className="h-10 px-4 rounded-[30px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border border-[#0071db] justify-center items-center gap-1 inline-flex">
                                <div className="text-center text-[#0071db] text-lg font-semibold font-['SF UI  Text'] leading-[14px]">View more</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`px-8 py-5 rounded-xl flex-col justify-center items-start gap-4 inline-flex transition-all duration-500 ease-in-out ${isAiTechnicalOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`} style={{ background: 'linear-gradient(135deg, rgba(0, 45, 191, 0.30) -1.89%, rgba(67, 150, 247, 0.24) 45.88%, rgba(255, 155, 210, 0.42) 76.85%, rgba(201, 255, 252, 0.42) 108.11%)' }}>
                    <div className="justify-start items-center gap-1 inline-flex">
                        <div className="w-6 h-6 pl-[3px] pr-0.5 pt-px pb-[1.08px] justify-center items-center flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
                                <path d="M9.39632 5.41157C9.57676 4.92392 10.2665 4.92392 10.4469 5.41157L11.974 9.53835C12.1442 9.9983 12.5068 10.3609 12.9668 10.5311L17.0935 12.0582C17.5812 12.2386 17.5812 12.9284 17.0935 13.1088L12.9668 14.6358C12.5068 14.806 12.1442 15.1687 11.974 15.6286L10.4469 19.7554C10.2665 20.2431 9.57676 20.2431 9.39632 19.7554L7.86927 15.6286C7.69907 15.1687 7.33643 14.806 6.87649 14.6358L2.7497 13.1088C2.26205 12.9284 2.26205 12.2386 2.7497 12.0582L6.87649 10.5311C7.33643 10.3609 7.69907 9.9983 7.86927 9.53835L9.39632 5.41157Z" fill="#323232" />
                                <path d="M16.4871 14.1136C16.5773 13.8698 16.9221 13.8698 17.0124 14.1136L17.3128 14.9255C17.3411 15.0021 17.4016 15.0626 17.4782 15.0909L18.2901 15.3913C18.5339 15.4816 18.5339 15.8264 18.2901 15.9167L17.4782 16.2171C17.4016 16.2454 17.3411 16.3059 17.3128 16.3825L17.0124 17.1944C16.9221 17.4382 16.5773 17.4382 16.4871 17.1944L16.1866 16.3825C16.1583 16.3059 16.0978 16.2454 16.0212 16.2171L15.2093 15.9167C14.9655 15.8264 14.9655 15.4816 15.2093 15.3913L16.0212 15.0909C16.0978 15.0626 16.1583 15.0021 16.1866 14.9255L16.4871 14.1136Z" fill="#323232" />
                                <path d="M4.25314 1.4206C4.43358 0.932952 5.12331 0.932953 5.30375 1.4206L5.89976 3.03128C5.95649 3.1846 6.07737 3.30548 6.23069 3.36221L7.84137 3.95821C8.32902 4.13866 8.32901 4.82839 7.84136 5.00883L6.23069 5.60484C6.07737 5.66157 5.95649 5.78245 5.89976 5.93576L5.30375 7.54644C5.12331 8.03409 4.43358 8.03409 4.25314 7.54644L3.65713 5.93576C3.6004 5.78245 3.47952 5.66157 3.3262 5.60484L1.71552 5.00883C1.22787 4.82838 1.22788 4.13866 1.71553 3.95821L3.3262 3.36221C3.47952 3.30548 3.6004 3.1846 3.65713 3.03128L4.25314 1.4206Z" fill="#323232" />
                                <path d="M14.4903 3.73633L15.0625 5.28259C15.1476 5.51256 15.3289 5.69388 15.5589 5.77898L17.1051 6.35115L15.5589 6.92331C15.3289 7.00841 15.1476 7.18973 15.0625 7.41971L14.4903 8.96597L13.9181 7.41971C13.833 7.18973 13.6517 7.00841 13.4217 6.92331L11.8755 6.35115L13.4217 5.77898C13.6517 5.69388 13.833 5.51256 13.9181 5.28259L14.4903 3.73633Z" fill="#323232" />
                                <path d="M4.78226 15.9268C4.97935 15.7572 5.281 15.9244 5.24174 16.1814L5.0341 17.5406C5.02175 17.6214 5.04533 17.7035 5.09863 17.7655L5.99526 18.8079C6.1648 19.0049 5.99765 19.3066 5.74065 19.2673L4.38147 19.0597C4.30067 19.0473 4.21851 19.0709 4.15655 19.1242L3.11418 20.0209C2.91708 20.1904 2.61544 20.0232 2.6547 19.7662L2.86234 18.4071C2.87468 18.3263 2.85111 18.2441 2.79781 18.1821L1.90117 17.1398C1.73163 16.9427 1.89878 16.641 2.15578 16.6803L3.51496 16.8879C3.59576 16.9003 3.67792 16.8767 3.73989 16.8234L4.78226 15.9268Z" fill="#323232" />
                            </svg>
                        </div>
                        <div className={`flex justify-start items-center gap-2`}>
                            <div className="text-center text-[#1e1e1e] text-xl font-semibold font-['SF UI  Text'] leading-[18px]">AI Summary</div>
                        </div>
                    </div>
                    <div className="self-stretch text-justify text-black text-lg font-normal font-['SF UI  Text'] leading-tight">The candidate achieved an overall score of 65% in the AI interview. Key strengths include effective communication, strong problem-solving abilities, quick adaptability, analytical thinking, and teamwork. However, the candidate demonstrated weaknesses in leadership experience, time management, technical expertise, and reliance on structured processes. Overall, the candidate is highly suitable for collaborative and problem-solving roles but may need upskilling to excel in leadership positions. For more details, click "View More".</div>
                </div>
            </div>
        </div>
    )
}

export default applicant;